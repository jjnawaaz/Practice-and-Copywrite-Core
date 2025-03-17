import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hi there from node app");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server Started at port: ${PORT}`);
});
