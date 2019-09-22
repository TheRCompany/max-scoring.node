'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const usersTableAttributes = {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true }
    }

    const boardsTableAttributes = {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      title: { type: Sequelize.STRING, notNull: true },
      description: { type: Sequelize.STRING, notNull: false },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    }

    return Promise.all(
      [
        queryInterface.createTable('users', usersTableAttributes),
        queryInterface.createTable('boards', boardsTableAttributes)
      ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all(
      [
        queryInterface.dropTable('users'),
        queryInterface.dropTable('boards')
      ]
    );
  },
}
