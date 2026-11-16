const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("Course Service is running"));
app.use("/courses", require("./routes/courseRoutes"));

const PORT = process.env.PORT || 3002;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Course Service running on port ${PORT}`);
});