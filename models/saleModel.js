const mongoose = require("mongoose");

const saleSchema = mongoose.Schema({
  // user: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   required: true,
  //   ref: "User"
  // },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Product"
  },
  daySale: {
    type: Number,
    required: true
  },
  date: {
    type: String,
    required: true,
  },
  // createdAt: {
  //   type: Date,
  //   default: Date.now
  // }
},
{
  timestamps: true,
}
);

// Define the model for the sales collection
const Sale = mongoose.model("Sale", saleSchema);
module.exports = Sale;