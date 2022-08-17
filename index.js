const express = require("express");
const cors = require("cors");
const connectToDatabase = require('./src/database/database');
const route = require('./src/routes/vehicles.route');

const port = 3210;
const app = express();

app.use(express.json());
app.use(cors());

connectToDatabase();

//testing base route
app.get('/', function (req, res) {
  res.send();
});

app.use("/vehicles", route);

app.listen(port, () => {
  console.log(`Server running on => http://localhost:${port}`);
});
