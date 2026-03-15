import Announcement from "../models/Announcement.js";


// Create Announcement
export const createAnnouncement = async (req, res) => {
  try {

    const { title, message, target } = req.body;

    const newAnnouncement = new Announcement({
      title,
      message,
      target
    });

    const savedAnnouncement = await newAnnouncement.save();

    res.status(201).json({
      success: true,
      message: "Announcement created successfully",
      data: savedAnnouncement
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: "Error creating announcement",
      error: error.message
    });

  }
};



// Get All Announcements
export const getAnnouncements = async (req, res) => {
  try {

    const announcements = await Announcement.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: announcements
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: "Error fetching announcements",
      error: error.message
    });

  }
};



// Delete Announcement
export const deleteAnnouncement = async (req, res) => {
  try {

    const { id } = req.params;

    await Announcement.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Announcement deleted successfully"
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: "Error deleting announcement",
      error: error.message
    });

  }
};