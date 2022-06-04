const handlebars = require('express-handlebars');

module.exports = (app, express) => {
  // Setup handlebars
  app.engine('hbs', handlebars.engine({ extname: 'hbs' }));
  app.set('view engine', 'hbs');
  app.set('views', './src/views');

  // Setup static files
  app.use(express.static('./src/public'));

  // Setup body parser
  app.use(express.urlencoded({ extended: true }));
};
