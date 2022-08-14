const Contacts = require('./Model/Contacts')
const express = require('express');

const bodyParser = require('body-parser')
const app = express();

const port = process.env.PORT || 4000;

app.use(bodyParser.json());

app.post('/create', (req,res) => {
    const user = new Contacts(req.body);
    user.save((err,res) =>{
        if(err){
            console.log(err);
            return;
        }
    })

})

app.get('/all',(req,res) => {
    Contacts.find().then((user) =>{
        res.send({
            user
        })
    })
})

app.get('/find/name',(req,res) =>{
    Contacts.findOne(req.body).then((user)=>{
        res.send({
            user
        })
    })
})

app.get('/find/number',(req,res) =>{
    Contacts.findOne(req.body).then((user)=>{
        res.send({
            user
        })
    })
})

app.delete('/number',(req,res) => {
    Contacts.findOneAndDelete(req.body).then((user) => {
        res.send({user})
    })
})


app.listen(port, () => {
    console.log('listening to 4000');
})