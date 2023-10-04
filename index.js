const express = require("express");
const app = express();
const articlesRouter = require("./routes/articles");

app.use(express.json());

app.use("/articles", articlesRouter);

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
