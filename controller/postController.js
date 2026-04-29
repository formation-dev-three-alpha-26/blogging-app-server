const post = require("../model/postModel");

const controller = {
  getAll: async (req, res) => {
    try {
      const data = await post.find();

      res.status(200).json(data);
    } catch (error) {
        res.status(500).send(error.message)
    }
  },
    createPost : async (req, res) => {
    try {
     await post.create(req.body);

      res.status(201).send("post crée");
    } catch (error) {
        res.status(500).send(error.message)
    }
  },

};

module.exports = controller;
