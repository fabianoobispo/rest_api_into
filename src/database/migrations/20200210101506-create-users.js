module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        allownull: false, // nao permite valor nulo
        autoIncrement: true,
        primaryKey: true,
      },
      administrador: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allownull: false,
      },
      name: {
        type: Sequelize.STRING,
        allownull: false,
      },
      email: {
        type: Sequelize.STRING,
        allownull: false,
        unique: true, // nao pode repitir o valor
      },

      password_hash: {
        type: Sequelize.STRING,
        allownull: false,
      },

      created_at: {
        type: Sequelize.DATE,
        allownull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allownull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('users');
  },
};
