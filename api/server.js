//const serverless = require("serverless-http")
const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());

console.log("EELO FROM THER SERVER");

app.get("/", (req,res) => {
  console.log("HERE WE ARE");
  res.send("Congrats I am up and running on VERCEL!!");
});

app.get("/api", (req,res) => {
  console.log("HELO");
  res.send({message: "Hello from express"});
});

app.get("/api/sudoku/easy", (req,res) => {
  console.log("API CALLING");
  const sudokuStuff = fetch("https://youdosudoku.com/api/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      difficulty: "easy", // "easy", "medium", or "hard" (defaults to "easy")
      solution: true, // true or false (defaults to true)
      array: false // true or false (defaults to false)
    })
  })
	.then(response =>  response.json())
	.then(data => res.send({info: data}))
	.catch(error => {
	  console.log("Error fetching Sudoku puzzle(API):", error);
	  res.status(500).send({error: "Failed to fetch Sudoku puzzle"});
	});
})

app.get("/api/sudoku/medium", (req,res) => {
  const sudokuStuff = fetch("https://youdosudoku.com/api/", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      difficulty: "medium", // "easy", "medium", or "hard" (defaults to "easy")
      solution: true, // true or false (defaults to true)
      array: false // true or false (defaults to false)
    })
  })
	.then(response =>  response.json())
	.then(data => res.send({info: data}))
	.catch(error => {
	  console.log("Error fetching Sudoku puzzle:", error);
	  res.status(500).send({error: "Failed to fetch Sudoku puzzle"});
	});
})

app.get("/api/sudoku/hard", (req,res) => {
  const sudokuStuff = fetch("https://youdosudoku.com/api/", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      difficulty: "hard", // "easy", "medium", or "hard" (defaults to "easy")
      solution: true, // true or false (defaults to true)
      array: false // true or false (defaults to false)
    })
  })
	.then(response =>  response.json())
	.then(data => res.send({info: data}))
	.catch(error => {
	  console.log("Error fetching Sudoku puzzle:", error);
	  res.status(500).send({error: "Failed to fetch Sudoku puzzle"});
	});
})

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
});


module.exports = app;
