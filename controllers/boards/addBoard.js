const { Board } = require('../../models');

const addBoard = async (req, res) => {
  const { _id } = req.user;
  const { name, description } = req.body;
  const board = await Board.create({ name, description, userId: _id });
  
  res.status(200).json({
    board
  });
};

module.exports = addBoard;
