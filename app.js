const express = require("express");
const app = express();
// require('dotenv').config();
const xlsx = require('xlsx');

const PORT = process.env.PORT || 3000;

const wb = xlsx.readFile('students.xlsx');
const ws = wb.Sheets["data"]

// your code
app.get('/', function (req,res) {
    res.send('hello world');
})

app.get('/students', function (req,res) {
    var data = xlsx.utils.sheet_to_json(ws)
    res.send(data);
})

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});