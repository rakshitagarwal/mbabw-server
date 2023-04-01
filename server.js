import Razorpay from "razorpay";
import app from "./app.js";
import { connectDB } from "./config/database.js";

connectDB();

export const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET,
});

app.get("/", (req, res) => {
  res.send("<h1>Working</h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`Server listening on PORT: ${process.env.PORT}`);
});
