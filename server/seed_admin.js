import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
dotenv.config();

const userSchema = mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: { type: String, select: false },
    role: String
}, { timestamps: true });

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model('User', userSchema);

async function seedAdmin() {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        let admin = await User.findOne({ email: 'admin@adhyayan.edu' });
        if (admin) {
            console.log("Admin account already exists. Resetting password to 'admin123'...");
            admin.password = 'admin123';
            await admin.save();
            console.log("Password reset successful.");
        } else {
            console.log("Creating new demo admin account...");
            await User.create({
                name: "System Admin",
                email: "admin@adhyayan.edu",
                password: "admin123",
                role: "admin"
            });
            console.log("Demo admin created successfully.");
        }
    } catch (err) {
        console.error("Error seeding admin:", err);
    } finally {
        mongoose.disconnect();
    }
}

seedAdmin();
