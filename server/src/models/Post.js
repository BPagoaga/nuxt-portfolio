const Promise = require("bluebird");

module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define("Post", {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    content: DataTypes.STRING,
    date: DataTypes.STRING
  });

  return Post;
};
