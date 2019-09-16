'use strict';
module.exports = function(app) {
  var maxScoring = require('../controllers/boardsController');

  // maxScoring Routes
  app.route('/')
    .get(maxScoring.getBoards);

  app.route('/boards')
    .get(maxScoring.getBoards);


  app.route('/boards/:boardId')
    .get(maxScoring.getBoard)
    .put(maxScoring.updateBoard);
};