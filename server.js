const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const apiRoutes = require("./routes/apiRoutes");
const app = express();
const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
// app.use("/api", apiRoutes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nytreact");

// Start the API server
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
