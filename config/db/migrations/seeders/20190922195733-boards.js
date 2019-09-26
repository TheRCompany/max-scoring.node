'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('boards', [
    { title: 'Meaningful Title #1', description: 'description #1', createdAt: new Date(), updatedAt: new Date() },
    { title: 'Meaningful Title #2', description: 'description #2', createdAt: new Date(), updatedAt: new Date() },
    { title: 'Meaningful Title #3', description: 'description #3', createdAt: new Date(), updatedAt: new Date() },
    { title: 'Meaningful Title #4', description: 'description #4', createdAt: new Date(), updatedAt: new Date() },
    { title: 'Meaningful Title #5', description: 'description #5', createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('boards', null, {});
  }
};
