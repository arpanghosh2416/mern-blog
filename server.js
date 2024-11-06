const express = require("express");
const app = express();
const server = require("http").Server(app);
const PORT = process.env.PORT || 8000;

//initialize a middleware.
app.use(express.json({ extended: false }));

//just a test route for now.
app.get("/", (req, res) => res.send("Hello World"));
app.post("/", (req, res) => res.send(`Hello ${req.body.name}`));
app.get("/hello/:name", (req, res) => res.send(`Hello ${req.params.name}`));

app.listen(PORT, () => console.log(`Server is running at ${PORT}`));
