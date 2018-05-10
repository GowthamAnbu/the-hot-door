const express = require('express'), // the king 
chalk = require('chalk'),  // chalk is for painting the console with colors :)
debug = require('debug')('server'), // server is the name of the 
morgan = require('morgan'), // the logger for the API traffic
app = express();
const port = process.env.PORT || 3000;

app.use(morgan('tiny'));


app.get('/', (request, response) => response.send('just following the old man'))

app.listen(port, () => debug(`listening on http://localhost:${chalk.green(port)}`));
