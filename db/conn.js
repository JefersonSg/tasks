const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nodemvc', 'root', '', {
  host: '34.173.171.235',
  dialect: 'mysql',
});

try {
  console.log('Conectado ao MySQL!');
} catch (error) {
  console.log('Não foi possivel conecta');
}

module.exports = sequelize;
