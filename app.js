const express = require("express");
const cors = require("cors");
const morgan = require("morgan"); // Tambahkan logging
require("dotenv").config();

const tripRoutes = require("./routes/trip");
const sequelize = require("./models/index");

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev")); // Gunakan middleware logging

// Routes
app.use("/api/trips", tripRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, async () => {
  console.log(`Server running on http://localhost:${PORT}`);
  await sequelize.sync();
});
