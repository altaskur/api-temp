const app = require('./app/app');
require('dotenv').config();

const { env } = process;

app.listen(env.APP_PORT, () => {
  console.log(`Server running on port ${env.APP_PORT}`);
});
