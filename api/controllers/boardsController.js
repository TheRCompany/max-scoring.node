'use strict';

exports.getBoards = function(req, res) {
    res.json('allo');
};

exports.getBoard = function(req, res) {
    res.json(req.body);
};

exports.updateBoard = function(req, res) {
    res.json(req.body);
}