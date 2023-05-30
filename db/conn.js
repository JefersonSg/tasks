const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nodemvc', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

try {
  console.log('Conectado ao MySQL!');
} catch (error) {
  console.log('Não foi possivel conecta');
}

module.exports = sequelize;
