const PostsController = require("./controllers/PostsController");

module.exports = app => {
  app.get("/api/posts", PostsController.index);
};
