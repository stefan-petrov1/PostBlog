const { setupConfig } = require('./config/config');
const config = setupConfig(`${__dirname}/config/envs`);

const express = require('express');
const { initializeDb } = require('./config/database');
const app = express();

require('./config/express')(app, express);
require('./config/routes')(app);

app.get('/', (req, res) => res.send('Running'));

async function main() {
  await initializeDb(config.DB_URI);
  app.listen(config.PORT);

  return `Server is running on port ${config.PORT}...`;
}

main()
  .then(console.log)
  .catch(console.error);
