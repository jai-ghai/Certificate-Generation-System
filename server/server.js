import app from "./app.js";
import connectDB from "./config/connectDB.js";

connectDB();

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Server is working on port: ${process.env.PORT}`);
});
