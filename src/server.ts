import express from "express";

const app = express();

app.get("/", (req, res) => {
  return res.send("Online");
});

const port = 3001;
app.listen(port, (): void => {
  console.log(`✅ Server is running on port ${port}`);
});
