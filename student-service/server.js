const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("Student Service is running"));
app.use("/students", require("./routes/studentRoutes"));

const PORT = process.env.PORT || 3001;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Student Service running on port ${PORT}`);
});