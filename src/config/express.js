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

  // Use request logger only if the app is not in production
  if (process.env.NODE_ENV != 'production') {
    app.use(require('morgan')('tiny'));
  }
};
