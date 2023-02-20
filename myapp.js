 const express = require('express')
 const app = express()
 app.use(express.json());
const listUsers = [ {
	"name":"Pandian",
	"email":"pandian@gmail.com",
	"phoneNumber":"92929292929"
},
{
	"name":"Megha",
	"email":"megha@gmail.com",
	"phoneNumber":"92929292909"
},
{
	"name":"Varun",
	"email":"varun@gmail.com",
	"phoneNumber":"9876368223"
}]; 

 app.get('/users',(req,res) => {
  res.send(listUsers);
 })
 app.post('/users',(req,res) => {
 listUsers.push(req.body);
 res.send(listUsers)
})
 app.put('/users',(req,res) => {
  res.send(listUsers)
 });
 app.listen(3000)
