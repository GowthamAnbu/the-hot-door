const express = require('express'); // the king
const chalk = require('chalk'); // chalk is for painting the console with colors :)
const debug = require('debug')('server'); // server is the name of the
const morgan = require('morgan'); // the logger for the API traffic
const path = require('path'); // path is used to solve cross platform (windows,linux,macos, etc..) string path match error

const app = express();
const port = process.env.PORT || 4000;

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '/public/')));
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')));

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', (request, response) => response.render('index', { title: 'Story Board' }));

app.listen(port, () => debug(`listening on http://localhost:${chalk.green(port)}`));
