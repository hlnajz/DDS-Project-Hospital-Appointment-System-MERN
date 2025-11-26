const mongoose = require("mongoose");
// this model is for RPC
const assuranceSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    type: {
      type: String,
      enum: ["normal", "premium"],
      required: true,
    },
    monthlyCost: { type: Number, required: true },
    coverage: { type: String, required: true },
    startDate: { type: Date, default: Date.now },
  },
  { collection: "assurances" }
);

module.exports = mongoose.model("Assurance", assuranceSchema);
