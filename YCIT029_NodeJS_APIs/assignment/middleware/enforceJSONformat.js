// Middleware to enforce JSON format for PUT and POST requests
export default function enforceJsonFormat(req, res, next) {
  if (req.method === "PUT" || req.method === "POST") {
    const contentType = req.headers["content-type"];

    if (!contentType || !contentType.includes("application/json")) {
      return res.status(400).json({
        error:
          "Invalid request format. Expected JSON. Please change the 'Content-Type' in the headers to 'application/json'",
      });
    }

    if (Object.keys(req.body).length === 0) {
      return res.status(400).json({
        error:
          "Invalid request body. Request body must not be empty and must be in JSON format",
      });
    }

    try {
      JSON.parse(JSON.stringify(req.body));
    } catch (error) {
      return res
        .status(400)
        .json({ error: "Invalid request body format. Expected valid JSON." });
    }
  }
  next();
}
