const { Post } = require("../models");

module.exports = {
  async index(req, res) {
    try {
      let posts = null;
      const search = req.query.search;

      if (search) {
        posts = await Post.findAll({
          where: {
            $or: ["title", "author", "content", "date"].map(key => {
              return {
                [key]: {
                  $like: `%${search}%`
                }
              };
            })
          }
        });
      } else {
        posts = await Post.findAll({
          limit: 10
        });
      }

      res.send(posts);
    } catch (err) {
      res.status(500).send({
        error: `An error has occured while trying to fetch the post : ${err}`
      });
    }
  },
  async post(req, res) {
    try {
      const post = await Post.create(req.body);
      res.send(post);
    } catch (err) {
      console.error(err);
      res.status(500).send({
        error: `An error has occured while trying create the post`
      });
    }
  },
  async show(req, res) {
    try {
      const post = await Post.findById(req.params.postId);
      res.send(post);
    } catch (err) {
      console.error(err);
      res.status(500).send({
        error: `An error has occured while trying to get the post`
      });
    }
  },
  async put(req, res) {
    try {
      const post = await Post.update(req.body, {
        where: {
          id: req.params.postId
        }
      });
      res.send(req.body);
    } catch (err) {
      console.error(err);
      res.status(500).send({
        error: `An error has occured while trying to edit the post`
      });
    }
  }
};
