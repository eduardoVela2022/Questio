// Imports
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// Question class inherits attributes and methods from the Model class
class Question extends Model {}

// Question model
Question.init(
  {
    // Id
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // Question
    question: {
      type: DataTypes.STRING,
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
    modelName: "question",
  }
);

// Exports
module.exports = Question;
