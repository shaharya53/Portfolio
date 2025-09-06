const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Test route (for browser check)
app.get("/", (req, res) => {
  res.send("✅ Email server is running!");
});

// ✅ API route
app.post("/send-email", async (req, res) => {
  const { email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "aryaaryashah@gmail.com", // your Gmail
        pass: "ernr zovu cjeb uyyw",   // Gmail App Password
      },
    });

    await transporter.sendMail({
      from: "aryaaryashah@gmail.com",   // must match your Gmail
      to: "aryaaryashah@gmail.com",     // receiving Gmail
      subject: "New Contact Message",
      text: `📩 From: ${email}\n\n${message}`, // include sender inside body
    });

    res.json({ success: true });
  } catch (err) {
    console.error("❌ Error sending email:", err);
    res.json({ success: false, error: err.message });
  }
});

// ✅ Start server
app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});
