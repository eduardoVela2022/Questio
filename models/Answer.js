// Imports
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// Answer class inherits attributes and methods from the Model class
class Answer extends Model {}

// Answer model
Answer.init(
  {
    // Id
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // Answer
    answer: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Is the answer the correct choice?
    isCorrect: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    // Question id foreign key
    questionId: {
      type: DataTypes.INTEGER,
      references: {
        model: "question",
        key: "id",
      },
    },
  },
  {
    // Table configuration
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "answer",
  }
);

// Exports
module.exports = Answer;
