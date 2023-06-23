const mongoose = require('mongoose');
const Temp = require('../models/temp');
require('dotenv').config();

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: 'altasTemp',
    });

    const { connection } = mongoose;

    console.log('Conectado a la BBDD');
    const collections = await connection.db.listCollections().toArray();
    const collectionNames = collections.map((collection) => collection.name);

    if (!collectionNames.includes('temp')) {
      await Temp.createCollections();
      console.log('Colección de Temp creada');
    }
  } catch (error) {
    console.error('Error al conectar con la BD');
    throw new Error('Error al conectar con la BD');
  }
};

module.exports = { dbConnection };
