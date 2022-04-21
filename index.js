const express = require('express');
const cors = require('cors');
const { response } = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) =>{
    res.send('Hello from my personal smarty pant!! with auto restart!');   
});

const users = [
    {id:1, name: 'John', email: 'jhon@gmail.com', number:'01089345'},
    {id:2, name: 'alex', email: 'alex@gmail.com', number:'01089445'},
    {id:3, name: 'sima', email: 'sima@gmail.com', number:'01083445'},
    {id:4, name: 'smith', email: 'smith@gmail.com', number:'010845345'},
    {id:5, name: 'warner', email: 'warner@gmail.com', number:'01059345'},
    {id:6, name: 'kholi', email: 'kholi@gmail.com', number:'01085345'},
    {id:7, name: 'doni', email: 'doni@gmail.com', number:'01489345'},

]

app.get('/users', (req, res) =>{
    // filter by search query parameter
    if(req.query.name){
        const search = req.query.name;
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched);
    }
    else{
        res.send(users);
    }
})

app.get('/users/:id', (req, res) =>{
    console.log(req.params);
    const id = parseInt(req.params.id);
    // const user= users[id];(optional down line)
    const user = users.find(u => u.id === id);
    res.send(user)
})

app.get('/fruits', (req, res)=>{
    res.send(['mango', 'apple', 'orange']);
})

app.post('/user', (req, res) =>{
    console.log('request',req);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

app.get('/fruits/mango/fazli', (req, res)=>{
    res.send('sour soud fazli flaver')
})
app.listen(port, ()=>{
    console.log('Listening on port', port);
})

