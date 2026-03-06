import fetch from 'node-fetch';

async function testAPI() {
    console.log('--- Testing User Registration ---');
    try {
        const regRes = await fetch('http://localhost:5000/api/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: 'Admin User',
                email: 'admin@example.com',
                password: 'password123',
                role: 'admin'
            })
        });

        const regData = await regRes.json();
        console.log('Status:', regRes.status);
        console.log('Response:', regData);

        console.log('\n--- Testing User Login ---');
        const loginRes = await fetch('http://localhost:5000/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: 'admin@example.com',
                password: 'password123'
            })
        });

        const loginData = await loginRes.json();
        console.log('Status:', loginRes.status);
        console.log('Response:', loginData);

        // Get the JWT from the set-cookie header
        const cookies = loginRes.headers.get('set-cookie');
        console.log('Cookies received:', cookies ? 'Yes' : 'No');

        console.log('\n--- Testing Protected Route ---');
        if (cookies) {
            const profileRes = await fetch('http://localhost:5000/api/auth/profile', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Cookie': cookies
                }
            });
            const profileData = await profileRes.json();
            console.log('Profile Status:', profileRes.status);
            console.log('Profile Response:', profileData);
        } else {
            console.log('Skipping protected route test, no cookies.');
        }

    } catch (err) {
        console.error('Test Failed:', err.message);
    }
}

testAPI();
