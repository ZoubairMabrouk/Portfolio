const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const { body, validationResult } = require("express-validator");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(helmet());
app.use(cors());
app.use(morgan("combined"));
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "Too many requests from this IP, please try again later.",
});
app.use(limiter);

const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 5,
  message: "Too many contact form submissions, please try again later.",
});

app.get("/api/health", (req, res) => {
  res.json({ status: "OK", message: "Server is running" });
});

app.get("/api/projects", (req, res) => {
  // This would typically fetch from a database
  const projects = [
    {
      id: 1,
      name: "B.I",
      description:
        "A complete BI Solution with OLAP Cube & IA integration for predictions ",
      technologies: ["React", ".NET", "FLASK", "MDX Query"],
      githubUrl: "https://github.com/ZoubairMabrouk/Pipline-BI-Complet",
      liveUrl: "https://github.com/ZoubairMabrouk/Business-Intelligence",
      image:
        "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 2,
      name: "Travel Agency",
      description:
        "Mobile application to the voyage of the Bus with online Ticket reservation",
      technologies: ["Flutter", "Firebase", "Figma"],
      githubUrl:
        "https://github.com/ZoubairMabrouk/R-servation-de-ticket-en-ligne-Soretras",
      liveUrl:
        "https://github.com/ZoubairMabrouk/R-servation-de-ticket-en-ligne-Soretras",
      image:
        "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 3,
      name: "Carpooling App",
      description: "Application web & mobile for Carpooling",
      technologies: ["Angular", "Flutter", "LARAVEL", "MySQL"],
      githubUrl: "https://github.com/ZoubairMabrouk/Conv-Admin-Espace",
      liveUrl: "https://github.com/ZoubairMabrouk/covoiturage-api",
      image:
        "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  res.json({ success: true, projects });
});

app.get("/api/services", (req, res) => {
  const services = [
    {
      id: 1,
      title: "Full-Stack Development",
      description:
        "Complete web application development using modern frameworks and technologies",
      icon: "💻",
      features: [
        "JS/TS",
        "React/Angular",
        "Node.js/Laravel/Spring/.NET",
        "Database Design",
        "Microservice Architectures",
      ],
    },
    {
      id: 2,
      title: "Mobile Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android",
      icon: "📱",
      features: [
        "Flutter",
        "Android Native Java",
        "Firebase Tools",
        "App Store Deployment",
      ],
    },
    {
      id: 3,
      title: "Machine & Deep Learning",
      description:
        "Manipulation of large datasets, Models Pipelines, Clustering/Classification/Regression, Computer vision, Natural Language Processing",
      icon: "🧠",
      features: [
        "Scikit-Learn",
        "TensorFlow",
        "Streamlit",
        "Word2Vec",
        "TF-IDF",
        "Numpy & Matplotlib",
      ],
    },
    {
      id: 4,
      title: "Embedded Systems",
      description:
        "Smart Home, Medical Solutions, Industrial Integration with Siemens",
      icon: "⚙️",
      features: ["C/C++", "MicroPython", "Firebase", "Conception"],
    },
  ];

  res.json({ success: true, services });
});

// Contact form endpoint
app.post(
  "/api/contact",
  contactLimiter,
  [
    body("name").trim().isLength({ min: 2, max: 100 }).escape(),
    body("email").isEmail().normalizeEmail(),
    body("subject").trim().isLength({ min: 5, max: 200 }).escape(),
    body("message").trim().isLength({ min: 10, max: 1000 }).escape(),
  ],
  async (req, res) => {
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //   return res.status(400).json({
    //     success: false,
    //     message: "Validation failed",
    //     errors: errors.array(),
    //   });
    // }

    const { name, email, subject, message } = req.body;

    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });
      console.log(process.env.CONTACT_EMAIL)
      console.log(name)
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.CONTACT_EMAIL || process.env.EMAIL_USER,
        subject: `Portfolio Contact: ${subject}`,
        html: `
          <h3>New Contact Form Submission</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      };

      await transporter.sendMail(mailOptions);

      res.json({
        success: true,
        message: "Thank you for your message! I'll get back to you soon.",
      });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(500).json({
        success: false,
        message: ("Failed to send message. Please try again later.", error),
      });
    }
  }
);

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: "Something went wrong!",
  });
});

// 404 handler
app.use("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
