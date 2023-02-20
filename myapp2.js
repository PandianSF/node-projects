const express = require('express')
const app = express()
app.use(express.json())
const fs = require('fs');
const listUsers = [];
jsonContent = JSON.stringify([]);

/* This excercise for writing the data into file and save the file using 'fs' */

app.post('/fs.cWs',(req,res) => {
       var writeStream = fs.createWriteStream('myDatas3.txt')
	       listUsers.push(req.body)
       writeStream.write(JSON.stringify(listUsers))
	       fs.appendFile('myDatas3.txt',JSON.stringify(req.body),function (err) {
	       if (err) {
		       return console.log(err);
	       }
	       console.log(jsonContent);
	res.send(listUsers)

       });
})   
 app.get('/users', (req, res) => {
	res.send(listUsers)
})
app.post('/users', (req, res) => {
	listUsers.push(req.body)
	res.send(listUsers)
})
app.put('/users', (req, res) => {
	res.send(listUsers)
})
app.delete('/users', (req, res) => {
	const { empName } = req.body
	listUsers = listUsers.filter((v) => v.empName != empName)
	res.send(listUsers)
})
app.patch('/users', (req, res) => {
	res.send(listUsers)
})
app.listen(3000)
