const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerSchema = new Schema({
  //Basic Information
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },

  //Profile Information
  city: { type: String, required: true },
  state: { type: String, required: true },
  title: { type: String, required: true },
  image: { type: String, required: false }, //How do we allow users to upload and store images in the database?
  bio: { type: String, required: false },
  category: { type: String, required: true }, //How do we store multiple selections?
  vendors: { type: Array, required: true },
  minPrice: { type: Number, required: true },
  maxPrice: { type: Number, required: true }
});

const Customers = mongoose.model("Customers", customerSchema);

module.exports = Customers;
