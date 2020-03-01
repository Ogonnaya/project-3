const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const plannerSchema = new Schema({
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
    category: { type: String, required: true }, //Array Mongoose //How do we store multiple selections?
    minPrice: { type: Number, required: true },
    maxPrice: { type: Number, required: true }
});

const Planners = mongoose.model("Planners", plannerSchema);

module.exports = Planners;