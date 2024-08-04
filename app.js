const express = require("express");
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 3030;

// your code
app.get('/', function (req,res) {
    res.send('hello world');
})

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});