const express = require('express')
const  app = express()
app.use(express.json())
let users = [];

/* This exercise forRemove the required parameters from the data */

app.get('/RemovetoDB',(req,res) => {
	res.send(users)

}) 

app.post('/RemovetoDB',(req,res) => {
	users.push(req.body)
	res.send(users)
})

app.post('/Remove/:id',(req,res) => {
	const id = req.params.id
	console.log(id)
	const promise = new Promise((resolve,reject) => {
       if(users = users.filter((v)=>v.id != req.params.id)){
		resolve('Promise is resolved')
	res.send(users)
	       console.log(promise)
	       console.log(users)
	} else {
		rejected('Promise is rejected')
	}
	})

})

app.get('/Find/:id',(req,res) => {
	const id = parseInt(req.params.id)
       res.send( users.filter((v) =>v.id === id))
	//res.send(found)
})


app.listen(3000,()=>console.log('Server Started'))
	
