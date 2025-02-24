const express = require("express");
const app = express();
const { MongoClient } = require("mongodb");
const server = require("http").Server(app);
const PORT = process.env.PORT || 8000;

//initialize a middleware.
app.use(express.json({ extended: false }));

app.get("/api/articles/:name", async (req, res) => {
  try {
    const articleName = req.params.name;
    console.log("testing...", articleName);
    const client = await MongoClient.connect("mongodb://127.0.0.1:27017", {
      serverSelectionTimeoutMS: 5000, // Time to wait for server selection
      connectTimeoutMS: 10000, // Time to wait for connection
      maxPoolSize: 10, // Max connections in pool
    });

    console.log(client);
    const db = client.db("mern-blog");
    const articlesInfo = await db
      .collection("articles")
      .findOne({ name: articleName });
    res.status(200).json(articlesInfo);
    console.log("Database connection successful. Document:", articlesInfo);
    client.close();
  } catch (error) {
    res.status(500).json({ message: "Error connecting to database", error });
  }
});

app.post("/api/articles/:name/add-comments", (req, res) => {
  const { username, text } = req.body;
  const articleName = req.params.name;
  articlesInfo[articleName].comments.push({ username, text });
  res.status(200).send(articlesInfo[articleName]);
});
app.listen(PORT, () => console.log(`Server is running at ${PORT}`));
