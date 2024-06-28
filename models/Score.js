// Imports
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// Score class inherits attributes and methods from the Model class
class Score extends Model {}

// Score model
Score.init(
  {
    // Id
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // Score
    score: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    // Date
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    // Quiz id foreign key
    quizId: {
      type: DataTypes.INTEGER,
      references: {
        model: "quiz",
        key: "id",
      },
    },
  },
  {
    // Table configuration
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "score",
  }
);

// Exports
module.exports = Score;
