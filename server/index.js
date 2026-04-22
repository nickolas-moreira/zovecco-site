const nodemailer = require("nodemailer");
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5001;

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "moreiranickolas02@gmail.com",
        pass: "kjpm thmz snvr sjle",
    },
});

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Backend is running");
});

app.post("/api/contact", async (req, res) => {
    const { name, contact, message } = req.body;

    const mailOptions = {
        from: "Zovecco Website <moreiranickolas@@gmail.com>",
        to: "moreiranickolas02@gmail.com",
        subject: "New Website Lead 🔥",
        text: `
Name: ${name}
Contact: ${contact}
Message: ${message}
    `,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log("Email sent!");
        res.json({ success: true });
    } catch (error) {
        console.log("Email error:", error);
        res.status(500).json({ success: false });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});