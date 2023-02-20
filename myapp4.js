const express =  require('express')
const app = express()
app.use(express.json())
const users = [];

app.post('/list',(req,res,next) => {

/*       This exercise for getting the value of one required parmeter in the route from sending the object through empty aarray */
         user.push(req.body)
   	res.send(users)
})
app.get('/list/:empName',(req,res) => {
	const empName = req.params.empName
	const lists = users.filter((v) => v.empName === empName)
	res.send(lists)
})
app.get('/list',(req,res) => {
	res.send(users)
});
app.listen(3000,()=>console.log('Server started'))

