require('dotenv').config()

const express = require('express');
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', 'src/views');

const server = app.listen(process.env.PORT, () => {
  console.log('Express server listening on port %d in %s mode', server.address().port, app.settings.env);
});

// Initialize routes
routes(app);