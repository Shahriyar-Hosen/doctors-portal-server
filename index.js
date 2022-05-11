const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
// ---------------------------

// async await function
async function run() {
    
    // try catch finally
    try {
        
    } finally {
        
    }
}
// call function catch (console dir)
run().catch(console.dir)
// --------------------------------------------

// http://localhost:5000/
app.get("/", (req, res) => {
  res.send("Hello Doctor Uncle!!!");
});

app.listen(port, () => {
  console.log(`Doctors Portal app listening on port ${port}`);
});