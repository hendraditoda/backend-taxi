const express = require("express");
const Trip = require("../models/trip");
const router = express.Router();

// Get filtered trips
router.get("/", async (req, res) => {
  const { minFare, maxFare, startTime, endTime, minDistance, maxDistance } =
    req.query;

  const where = {};
  if (minFare) where.fare_amount = { [Op.gte]: minFare };
  if (maxFare) where.fare_amount = { [Op.lte]: maxFare };
  if (startTime) where.pickup_datetime = { [Op.gte]: new Date(startTime) };
  if (endTime) where.dropoff_datetime = { [Op.lte]: new Date(endTime) };
  if (minDistance) where.trip_distance = { [Op.gte]: minDistance };
  if (maxDistance) where.trip_distance = { [Op.lte]: maxDistance };

  try {
    const trips = await Trip.findAll({ where });
    res.json(trips);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
