const express = require("express");
const cors = require("cors");

const port = 3210;
const app = express();

app.use(express.json());
app.use(cors());

app.use("/cars", route);

app.listen(port, () => {
  console.log(`Server running on => http://localhost:${port}`);
});
