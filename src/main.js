const app = require('./app/app');
const { dbConnection } = require('./db/conection');
require('dotenv').config();

const { env } = process;
dbConnection();
app.listen(env.APP_PORT, () => {
  console.log(`Server running on port ${env.APP_PORT}`);
});
