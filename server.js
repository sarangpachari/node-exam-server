const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());

//MONGODB CONNECTION
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

//ROUTES
const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

//SERVER
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const jwt = require('jsonwebtoken');
const token = jwt.sign({ id: "testUser" }, process.env.JWT_SECRET, { expiresIn: '1h' });
console.log("Generated Token:", token);

