// Imports
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// User class inherits attributes and methods from the Model class
class User extends Model {}

// User model
User.init(
  {
    // Id
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // Username
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Email
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Password
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // Table configuration
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  }
);

// Exports
module.exports = User;
