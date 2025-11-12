const axios = require("axios");
const User = require("../models/userModel");
const Assurance = require("../models/assuranceModel");

exports.subscribeAssurance = async (req, res) => {
  try {
    const { userId, type } = req.body;
    if (!userId || !type) return res.status(400).json({ message: "userId and type are required" });

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    // Call the RPC endpoint to get AI suggested plan
    const { data } = await axios.post(
      process.env.RPC_URL || "https://dds-project-hospital-appointment-system-wj9d.onrender.com/rpc/assurance",
      {
        age: user.age,
        gender: user.gender,
        type,
      }
    );

    const { suggested_plan, monthly_cost, coverage } = data;

    // Upsert Assurance in DB
    const assurance = await Assurance.findOneAndUpdate(
      { user: userId },
      { type: suggested_plan, monthlyCost: monthly_cost, coverage, startDate: new Date() },
      { upsert: true, new: true }
    );

    // Update user assurance field
    user.assurance = suggested_plan;
    await user.save();

    res.json({ message: "Assurance subscribed", assurance });
  } catch (err) {
    console.error("Subscription error:", err.message);
    res.status(500).json({ message: "Subscription failed", error: err.message });
  }
};
