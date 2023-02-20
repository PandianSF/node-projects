const express = require('express')
const app = express()
app.use(express.json())
const listUsers = [{
	empName:"Pandian",
	empid:"1278",
	email:"pandian@gmail.com"
},
	{
        empName:"George",
	empid:"1287",
	email:"george@gmail.com"
},
	{
	empName:"Praba",
	empid:"1296",
	email:"praba@gmail.com"
},
	{
	empName:"John",
        empid:"1305",
        email:"john@gmail.com"
}];

app.use('/',(req,res,next) => {
/*	This exercise for search and filter the value of one parameter in route using req.query in app.use method */

/*    	const query = (req.query);
	const name = query.empName;
	console.log('employee find requested')
	const foundUser = listUsers.find((user)=>{
		console.log(user,name)	
		if(user.empName === name){
			return user
		}
	
	})
	res.send(foundUser)*/

        const filters = req.query
	const filteredlistUsers = listUsers.filter(listUsers=>{
        let isValid = true;
        for (key in filters) {
	console.log(key,listUsers[key],filters[key]);
	isValid =isValid && listUsers[key] == filters[key];
	}
		return isValid;
	});
	res.send(filteredlistUsers);
});

app.get('/Pandian',(req,res) => {
	res.send(listUsers)
})
app.post('/Pandian',(req,res) => {
	 listUsers.push(req.body)
	res.send(listUsers)
	console.log('list',listUsers);
})
app.listen(3000,()=>console.log('Server started'))
