const express = require("express");
const axios = require("axios");
const { subscribeAssurance } = require("../controllers/assuranceController");
const router = express.Router();

// Local DB route: subscribe or update user assurance
router.post("/subscribe", subscribeAssurance);

// RPC proxy route: forwards request to FastAPI or AI server
router.post("/assurance", async (req, res) => {
  try {
    const response = await axios.post(
      process.env.RPC_URL || "https://dds-project-hospital-appointment-system-wj9d.onrender.com/rpc/assurance",
      req.body
    );
    res.json(response.data);
  } catch (error) {
    console.error("RPC Error:", error.message);
    res.status(500).json({ error: "RPC call failed" });
  }
});

module.exports = router;
