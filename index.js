const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
// ---------------------------

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.7toku.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

// async await function
async function run() {
  // try catch finally
  try {
    await client.connect();
    const servicesCollection = client
      .db("doctors-portal")
      .collection("services");
  } finally {
  }
}
// call function catch (console dir)
run().catch(console.dir);
// --------------------------------------------

// http://localhost:5000/
app.get("/", (req, res) => {
  res.send("Hello Doctor Uncle!!!");
});

app.listen(port, () => {
  console.log(`Doctors Portal app listening on port ${port}`);
});
