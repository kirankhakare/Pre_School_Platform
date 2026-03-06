import fetch from 'node-fetch';

async function testWrongLogin() {
    console.log("Testing wrong login...");
    const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: "invalid@email.com", password: "wrongpassword" })
    });
    console.log("Login Invalid HTTP Status:", res.status);
    console.log("Login Invalid res.ok:", res.ok);
    const data = await res.json();
    console.log("Login Invalid Response:", data);
}

async function testWrongRegister() {
    console.log("Testing wrong register...");
    const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: "", email: "notanemail", password: "123", role: "" })
    });
    console.log("Register Invalid HTTP Status:", res.status);
    console.log("Register Invalid res.ok:", res.ok);
    const data = await res.json();
    console.log("Register Invalid Response:", data);
}

async function run() {
    await testWrongLogin();
    await testWrongRegister();
}

run();
