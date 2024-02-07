import "dotenv/config";
import app from "./app";

const port = process.env.PORT || 3001;
app.listen(port, (): void => {
  console.log(`✅ Server is running on port ${port}`.green);
});
