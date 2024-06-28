// Imports
const Answer = require("../models/Answer");

// Answer seeds
const answerSampleData = [
  // Questions of the quiz about the capitals of south american countries (id: 1 - 10)
  // What is the capital of Colombia?
  {
    answer: "Medellín",
    isCorrect: false,
    questionId: 1,
  },
  {
    answer: "Cali",
    isCorrect: false,
    questionId: 1,
  },
  {
    answer: "Bogotá",
    isCorrect: true,
    questionId: 1,
  },
  {
    answer: "Cartagena",
    isCorrect: false,
    questionId: 1,
  },
  // What is the capital of Ecuador?
  {
    answer: "Guayaquil",
    isCorrect: false,
    questionId: 2,
  },
  {
    answer: "Quito",
    isCorrect: true,
    questionId: 2,
  },
  {
    answer: "Santo Domingo",
    isCorrect: false,
    questionId: 2,
  },
  {
    answer: "Manta",
    isCorrect: false,
    questionId: 2,
  },
  // What is the capital of Venezuela?
  {
    answer: "Caracas",
    isCorrect: true,
    questionId: 3,
  },
  {
    answer: "Maracaibo",
    isCorrect: false,
    questionId: 3,
  },
  {
    answer: "Maracay",
    isCorrect: false,
    questionId: 3,
  },
  {
    answer: "Barquisimeto",
    isCorrect: false,
    questionId: 3,
  },
  // What is the capital of Peru?
  {
    answer: "Trujillo",
    isCorrect: false,
    questionId: 4,
  },
  {
    answer: "Arequipa",
    isCorrect: false,
    questionId: 4,
  },
  {
    answer: "Cusco",
    isCorrect: false,
    questionId: 4,
  },
  {
    answer: "Lima",
    isCorrect: true,
    questionId: 4,
  },
  // What is the capital of Brazil?
  {
    answer: "Rio de Janeiro",
    isCorrect: false,
    questionId: 5,
  },
  {
    answer: "Brasília",
    isCorrect: true,
    questionId: 5,
  },
  {
    answer: "São Paulo",
    isCorrect: false,
    questionId: 5,
  },
  {
    answer: "Fortaleza",
    isCorrect: false,
    questionId: 5,
  },
  // What is the capital of Chile?
  {
    answer: "Antofagasta",
    isCorrect: false,
    questionId: 6,
  },
  {
    answer: "Concepción",
    isCorrect: false,
    questionId: 6,
  },
  {
    answer: "Valparaiso",
    isCorrect: false,
    questionId: 6,
  },
  {
    answer: "Santiago",
    isCorrect: true,
    questionId: 6,
  },
  // What is the capital of Argentina?
  {
    answer: "Córdoba",
    isCorrect: false,
    questionId: 7,
  },
  {
    answer: "Rosario",
    isCorrect: false,
    questionId: 7,
  },
  {
    answer: "Buenos Aires",
    isCorrect: true,
    questionId: 7,
  },
  {
    answer: "Salta",
    isCorrect: false,
    questionId: 7,
  },
  // What is the capital of Uruguay?
  {
    answer: "Montevideo",
    isCorrect: true,
    questionId: 8,
  },
  {
    answer: "Tacuarembó",
    isCorrect: false,
    questionId: 8,
  },
  {
    answer: "Concordia",
    isCorrect: false,
    questionId: 8,
  },
  {
    answer: "Rivera",
    isCorrect: false,
    questionId: 8,
  },
  // What is the capital of Paraguay?
  {
    answer: "Asunción",
    isCorrect: true,
    questionId: 9,
  },
  {
    answer: "Villarrica",
    isCorrect: false,
    questionId: 9,
  },
  {
    answer: "Ciudad del Este",
    isCorrect: false,
    questionId: 9,
  },
  {
    answer: "Luque",
    isCorrect: false,
    questionId: 9,
  },
  // What is the capital of Bolivia?
  {
    answer: "Cochabamba",
    isCorrect: false,
    questionId: 10,
  },
  {
    answer: "Sucre",
    isCorrect: false,
    questionId: 10,
  },
  {
    answer: "La Paz",
    isCorrect: true,
    questionId: 10,
  },
  {
    answer: "Trinidad",
    isCorrect: false,
    questionId: 10,
  },
  // Questions of the quiz about the capitals of the states of Mexico (id: 11 - 20)
  // What is the capital of the State of Mexico?
  {
    answer: "Tulum",
    isCorrect: false,
    questionId: 11,
  },
  {
    answer: "Chetumal",
    isCorrect: true,
    questionId: 11,
  },
  {
    answer: "Cancún",
    isCorrect: false,
    questionId: 11,
  },
  {
    answer: "Cozumel",
    isCorrect: false,
    questionId: 11,
  },
  // What is the capital of the State of Guerrero?
  {
    answer: "Zihuatanejo",
    isCorrect: false,
    questionId: 12,
  },
  {
    answer: "Acapulco",
    isCorrect: false,
    questionId: 12,
  },
  {
    answer: "Chilpancingo",
    isCorrect: true,
    questionId: 12,
  },
  {
    answer: "Iguala",
    isCorrect: false,
    questionId: 12,
  },
  // What is the capital of the State of Jalisco?
  {
    answer: "Guadalajara",
    isCorrect: true,
    questionId: 13,
  },
  {
    answer: "Puerto Vallarta",
    isCorrect: false,
    questionId: 13,
  },
  {
    answer: "Zapopan",
    isCorrect: false,
    questionId: 13,
  },
  {
    answer: "Tequila",
    isCorrect: false,
    questionId: 13,
  },
  // What is the capital of the State of Michoacán?
  {
    answer: "Lázaro Cárdenas",
    isCorrect: false,
    questionId: 14,
  },
  {
    answer: "Hidalgo",
    isCorrect: false,
    questionId: 14,
  },
  {
    answer: "Uruapan",
    isCorrect: false,
    questionId: 14,
  },
  {
    answer: "Morelia",
    isCorrect: true,
    questionId: 14,
  },
  // What is the capital of the State of Baja California?
  {
    answer: "Ensenada",
    isCorrect: false,
    questionId: 15,
  },
  {
    answer: "Tijuana",
    isCorrect: false,
    questionId: 15,
  },
  {
    answer: "Mexicali",
    isCorrect: true,
    questionId: 15,
  },
  {
    answer: "Tecate",
    isCorrect: false,
    questionId: 15,
  },
  // What is the capital of the State of Coahuila?
  {
    answer: "Saltillo",
    isCorrect: true,
    questionId: 16,
  },
  {
    answer: "Torreón",
    isCorrect: false,
    questionId: 16,
  },
  {
    answer: "Monclova",
    isCorrect: false,
    questionId: 16,
  },
  {
    answer: "Piedras Negras",
    isCorrect: false,
    questionId: 16,
  },
  // What is the capital of the State of Nayarit?
  {
    answer: "San Blas",
    isCorrect: false,
    questionId: 17,
  },
  {
    answer: "Tuxpan",
    isCorrect: false,
    questionId: 17,
  },
  {
    answer: "Sayulita",
    isCorrect: false,
    questionId: 17,
  },
  {
    answer: "Tepic",
    isCorrect: true,
    questionId: 17,
  },
  // What is the capital of the State of Sinaloa?
  {
    answer: "Culiacán",
    isCorrect: true,
    questionId: 18,
  },
  {
    answer: "Los Mochis",
    isCorrect: false,
    questionId: 18,
  },
  {
    answer: "Mazatlán",
    isCorrect: false,
    questionId: 18,
  },
  {
    answer: "Navolato",
    isCorrect: false,
    questionId: 18,
  },
  // What is the capital of the State of Chiapas?
  {
    answer: "Palenque",
    isCorrect: false,
    questionId: 19,
  },
  {
    answer: "Comitán",
    isCorrect: false,
    questionId: 19,
  },
  {
    answer: "Tuxtla Gutiérrez",
    isCorrect: true,
    questionId: 19,
  },
  {
    answer: "Ocosingo",
    isCorrect: false,
    questionId: 19,
  },
  // What is the capital of the State of Baja California Sur?
  {
    answer: "Guerrero Negro",
    isCorrect: false,
    questionId: 20,
  },
  {
    answer: "La Paz",
    isCorrect: true,
    questionId: 20,
  },
  {
    answer: "Cabo San Lucas",
    isCorrect: false,
    questionId: 20,
  },
  {
    answer: "Santa Rosalía",
    isCorrect: false,
    questionId: 20,
  },
  // Questions of the quiz about the capitals of the states of the USA (id: 21 - 30)
  // What is the capital of the State of Hawaii?
  {
    answer: "Kahului",
    isCorrect: false,
    questionId: 21,
  },
  {
    answer: "Lahaina",
    isCorrect: false,
    questionId: 21,
  },
  {
    answer: "Pearl City",
    isCorrect: false,
    questionId: 21,
  },
  {
    answer: "Honolulu",
    isCorrect: true,
    questionId: 21,
  },
  // What is the capital of the State of Michigan?
  {
    answer: "Lansing",
    isCorrect: true,
    questionId: 22,
  },
  {
    answer: "Detroit",
    isCorrect: false,
    questionId: 22,
  },
  {
    answer: "Grand Rapids",
    isCorrect: false,
    questionId: 22,
  },
  {
    answer: "Kalamazoo",
    isCorrect: false,
    questionId: 22,
  },
  // What is the capital of the State of Wisconsin?
  {
    answer: "Milwaukee",
    isCorrect: false,
    questionId: 23,
  },
  {
    answer: "Madison",
    isCorrect: true,
    questionId: 23,
  },
  {
    answer: "Green Bay",
    isCorrect: false,
    questionId: 23,
  },
  {
    answer: "Appleton",
    isCorrect: false,
    questionId: 23,
  },
  // What is the capital of the State of Illinois?
  {
    answer: "Bloomington",
    isCorrect: false,
    questionId: 24,
  },
  {
    answer: "Springfield",
    isCorrect: true,
    questionId: 24,
  },
  {
    answer: "Chicago",
    isCorrect: false,
    questionId: 24,
  },
  {
    answer: "Rockford",
    isCorrect: false,
    questionId: 24,
  },
  // What is the capital of the State of New Mexico
  {
    answer: "Albuquerque",
    isCorrect: false,
    questionId: 25,
  },
  {
    answer: "Las Cruces",
    isCorrect: false,
    questionId: 25,
  },
  {
    answer: "Santa Fe",
    isCorrect: true,
    questionId: 25,
  },
  {
    answer: "Roswell",
    isCorrect: false,
    questionId: 25,
  },
  // What is the capital of the State of Mississippi?
  {
    answer: "Jackson",
    isCorrect: true,
    questionId: 26,
  },
  {
    answer: "Hattiesburg",
    isCorrect: false,
    questionId: 26,
  },
  {
    answer: "Tupelo",
    isCorrect: false,
    questionId: 26,
  },
  {
    answer: "Meridian",
    isCorrect: false,
    questionId: 26,
  },
  // What is the capital of the State of Georgia?
  {
    answer: "Albany",
    isCorrect: false,
    questionId: 27,
  },
  {
    answer: "Savannah",
    isCorrect: false,
    questionId: 27,
  },
  {
    answer: "Columbus",
    isCorrect: false,
    questionId: 27,
  },
  {
    answer: "Atlanta",
    isCorrect: true,
    questionId: 27,
  },
  // What is the capital of the State of Virginia?
  {
    answer: "Charlottesville",
    isCorrect: false,
    questionId: 28,
  },
  {
    answer: "Richmond",
    isCorrect: true,
    questionId: 28,
  },
  {
    answer: "Norfolk",
    isCorrect: false,
    questionId: 28,
  },
  {
    answer: "Fredericksburg",
    isCorrect: false,
    questionId: 28,
  },
  // What is the capital of the State of Pennsylvania?
  {
    answer: "Allentown",
    isCorrect: false,
    questionId: 29,
  },
  {
    answer: "Pittsburgh",
    isCorrect: false,
    questionId: 29,
  },
  {
    answer: "Harrisburg",
    isCorrect: true,
    questionId: 29,
  },
  {
    answer: "Philadelphia",
    isCorrect: false,
    questionId: 29,
  },
  // What is the capital of the State of Connecticut?
  {
    answer: "Bridgeport",
    isCorrect: false,
    questionId: 30,
  },
  {
    answer: "Waterbury",
    isCorrect: false,
    questionId: 30,
  },
  {
    answer: "New Haven",
    isCorrect: false,
    questionId: 30,
  },
  {
    answer: "Hartford",
    isCorrect: true,
    questionId: 30,
  },
];

// Adds the answer seeds to the answer table of the database
async function seedAnswer() {
  await Answer.bulkCreate(answerSampleData);
}

// Exports
module.exports = seedAnswer;
