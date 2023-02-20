const express = require('express');
const app = express()
app.use(express.json())
const fetch = require('node-fetch')
let  data = [];

fetch("https://dog.ceo/api/breeds/list/all")
  .then(res => res.json())
   .then(json =>  data.push(json))

app.get('/api',(req,res) => {
	res.send(data)

})
app.get('/Fapi/:breed',(req,res) => {
       const breed  = req.params.breed
       let list = data[0].message[breed]  
       console.log(list)
	res.send(list)
})
app.post('/Rapi/:breed',(req,res) => {
      const breed = req.params.breed
	let result = data[0].message
	let final = delete result.breed
	console.log(final)
	res.send(final)
 /*     res.send(data[0].message[delete[breed]])   */

});

app.listen(3000,()=>console.log('Server Started'))
