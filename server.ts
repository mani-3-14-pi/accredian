import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // JSON middleware
  app.use(express.json());

  // Health check API
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", service: "Accredian Enterprise API" });
  });

  // Contact lead capture API endpoint
  app.post("/api/contact", (req, res) => {
    const { firstName, lastName, workEmail, company, phone, message } = req.body || {};

    console.log("RECEIVED ENTERPRISE LEAD SUBMISSION:", {
      firstName,
      lastName,
      workEmail,
      company,
      phone,
      message,
      timestamp: new Date().toISOString(),
    });

    // Basic validation
    if (!firstName || !lastName || !workEmail || !company) {
      return res.status(400).json({
        success: false,
        error: "Missing required fields: First Name, Last Name, Work Email, and Company are required.",
      });
    }

    if (!workEmail.includes("@") || !workEmail.includes(".")) {
      return res.status(400).json({
        success: false,
        error: "Invalid work email address.",
      });
    }

    // Return success response
    return res.status(200).json({
      success: true,
      message: "Thank you! Our enterprise executive team has received your request and will reach out within 24 hours.",
      leadId: `LEAD-${Date.now().toString(36).toUpperCase()}`,
    });
  });

  // Vite middleware for development vs static build in production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Accredian Enterprise server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("Failed to start server:", err);
  process.exit(1);
});
