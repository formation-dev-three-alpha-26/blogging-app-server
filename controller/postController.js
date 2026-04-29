const post = require("../model/postModel");

const controller = {
  getAll: async (req, res) => {
    try {
      const data = await post.find().populate("author", "-password");

      res.status(200).json(data);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
  createPost: async (req, res) => {
    try {
      await post.create(req.body);

      res.status(201).send("post crée");
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  updatePost: async (req, res) => {
    try {
      let postprupdate = await post.findByIdAndUpdate(req.params.id, req.body);

      if (!postprupdate) {
        return res.status(404).send("post not found");
      }

      res.status(200).send("post modifié");
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  deletePost: async (req, res) => {
    try {
      let postprdelete = await post.findByIdAndDelete(req.params.id);

      if (!postprdelete) {
        return res.status(404).send("post not found");
      }

      res.status(200).send("post supprimé");
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
  onePost: async (req, res) => {
    try {
      let onepost = await post
        .findById(req.params.id)
        .populate("author", "-password");

      if (!onepost) {
        return res.status(404).send("post not found");
      }

      res.status(200).json(onepost);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  getpostsparUser: async (req, res) => {
    try {
      const posts = await post.find({ author: req.params.userId });

      res.status(200).json(posts);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
};

module.exports = controller;
