const asyncHandler = require("express-async-handler");
const Sale = require("../models/saleModel");
// const Product = require("../models/productModel");


// Create a new sale document and save it to the database
// Create a new sale document and save it to the database
const createSale = asyncHandler( async (req, res) => {
  // const product = await Product.findOne({ _id: _id })
    const { daySale, date } = req.body;

    if (!daySale || !date ) {
      res.status(400);
      throw new Error("Please fill in all fields");
    }

    const sale = await Sale.create({
      product: req.product._id,
      daySale,
      date,
     
    });

   
    res.status(201).json(sale);
   
});



const getSales = asyncHandler(async (req, res) => {
  const sales = await Sale.find({ product: req.product._id }).sort("-createdAt");
  res.status(200).json(sales);
});


module.exports = { createSale, getSales };