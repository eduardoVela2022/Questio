// Imports
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// Quiz class inherits attributes and methods from the Model class
class Quiz extends Model {}

// Quiz model
Quiz.init(
  {
    // Id
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // Name
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // User id foreign key
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    // Table configuration
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "quiz",
  }
);

// Exports
module.exports = Quiz;
