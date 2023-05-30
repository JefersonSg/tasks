const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

const path = require('path');

const conn = require('./db/conn');

// Models
const Task = require('./models/Task');

// Routes
const taskRoutes = require('./routes/tasksRoutes');

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.use(express.json());

app.use(express.static('./public'));

app.use('/tasks', taskRoutes);

app.use(
  '/tasks/css',
  express.static(__dirname + '/public/css', {
    setHeaders: (res, path) => {
      if (path.endsWith('.css')) {
        res.setHeader('Content-Type', 'text/css');
      }
    },
  }),
);

conn
  .sync()
  .then(() => {
    app.listen(3333);
  })
  .catch((err) => console.log(err));
