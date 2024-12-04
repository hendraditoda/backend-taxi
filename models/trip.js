const { DataTypes } = require("sequelize");
const sequelize = require("./index");

const Trip = sequelize.define("Trip", {
  pickup_datetime: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  dropoff_datetime: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  pickup_longitude: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  pickup_latitude: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  dropoff_longitude: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  dropoff_latitude: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  fare_amount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  trip_distance: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

module.exports = Trip;
