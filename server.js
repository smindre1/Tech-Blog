const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');


//Heroku Server port
const PORT = process.env.PORT || 3001;

const app = express();




app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
