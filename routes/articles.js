const express = require("express");
const router = express.Router();

// Create some initial data for testing
let articles = [
  {
    id: 1,
    title: "First Article",
    content: "This is the content of the first article.",
  },
  {
    id: 2,
    title: "Second Article",
    content: "This is the content of the second article.",
  },
];

// Get all articles
router.get("/", (req, res) => {
  res.json(articles);
});

// Get a specific article
router.get("/:articleId", (req, res) => {
  const article = articles.find(
    article => article.id === parseInt(req.params.articleId)
  );
  if (article) {
    res.json(article);
  } else {
    res.status(404).json({ message: "Article not found" });
  }
});

// Create a new article
router.post("/", (req, res) => {
  const newArticle = {
    id: articles.length + 1,
    title: req.body.title,
    content: req.body.content,
  };
  articles.push(newArticle);
  res.status(201).json(newArticle);
});

// Update an existing article
router.put("/:articleId", (req, res) => {
  const article = articles.find(
    article => article.id === parseInt(req.params.articleId)
  );
  if (article) {
    article.title = req.body.title;
    article.content = req.body.content;
    res.json(article);
  } else {
    res.status(404).json({ message: "Article not found" });
  }
});

// Delete an article
router.delete("/:articleId", (req, res) => {
  const articleIndex = articles.findIndex(
    article => article.id === parseInt(req.params.articleId)
  );
  if (articleIndex !== -1) {
    articles.splice(articleIndex, 1);
    res.json({ message: "Article deleted" });
  } else {
    res.status(404).json({ message: "Article not found" });
  }
});

module.exports = router;
