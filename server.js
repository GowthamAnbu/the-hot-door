const express = require('express'), // the king 
chalk = require('chalk'),  // chalk is for painting the console with colors :)
debug = require('debug')('server'), // server is the name of the 
morgan = require('morgan'), // the logger for the API traffic
path = require('path') // path is used to solve cross platform (windows,linux,macos, etc..) string path match error
app = express();
const port = process.env.PORT || 3000;

app.use(morgan('tiny'));


app.get('/', (request, response) => response.sendFile(path.join(__dirname,'/views/index.html')));

app.listen(port, () => debug(`listening on http://localhost:${chalk.green(port)}`));
