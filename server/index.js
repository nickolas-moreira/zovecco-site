const nodemailer = require("nodemailer");
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5001;

// 🔐 Email transporter (secure via env vars)
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

app.use(cors());
app.use(express.json());

// sanity check route
app.get("/", (req, res) => {
    res.send("Backend is running 🔥");
});

// contact form route
app.post("/api/contact", async (req, res) => {
    const { name, contact, message } = req.body;

    console.log("EMAIL_USER BEING USED:", process.env.EMAIL_USER);

    const mailOptions = {
        from: `Zovecco Website <${process.env.EMAIL_USER}>`,
        to: process.env.RECEIVER_EMAIL || process.env.EMAIL_USER,
        subject: "New Website Lead 🔥",
        text: `
Name: ${name}
Contact: ${contact}
Message: ${message}
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log("Email sent 🔥");
        res.json({ success: true });
    } catch (error) {
        console.log("Email error:", error);
        res.status(500).json({ success: false });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});