const express = require("express");
const axios = require("axios");
const router = express.Router();

// Forward directly to Python
router.post("/assurance", async (req, res) => {
  try {
    const response = await axios.post("https://dds-project-hospital-appointment-system-wj9d.onrender.com/rpc/assurance", req.body);
    res.json(response.data);
  } catch (error) {
    console.error("RPC error:", error.message);
    res.status(500).json({ error: "Failed to connect to FastAPI RPC" });
  }
});

module.exports = router;
