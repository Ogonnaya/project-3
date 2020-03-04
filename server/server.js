const express = require("express");
const mongoose = require("mongoose");
const plannerRoutes = require("./routes/plannerIndex");
const customerRoutes = require("./routes/customerIndex");

const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(plannerRoutes);
app.use(customerRoutes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/kollab", {
  useNewUrlParser: true
});

// Start the API server
app.listen(PORT, () => {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
