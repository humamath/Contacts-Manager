//const express = require('express');
//const mongoose = require('mongoose');
import express from 'express'
import {Connection} from './db/mongoose.js';
import Routes from './routes/route.js'
import bodyParser from 'body-parser';
import cors from 'cors'
const app = express();

app.use(bodyParser.json({extended: true}));
app.use(cors());
app.use('/',Routes);

Connection();


//Create
/*app.post('/add', (req, res) => {
  console.log(req.parms.name);
  const user = new Users({
    name: req.params.name
  })
  user.save();
  res.redirect('/')
})

//Read
app.get('/fetch', (req, res) => {
  Users.find((err, data) => {
    if (err) console.log('Error')
    else res.send(data);
  })
})


//Update
app.post('/update', (req, res) => {
  const old_name = req.params.oldname
  const new_name = req.params.newname

  Users.findOneAndUpdate({ name: old_name }, { name: new_name }, (err) => {
    if (err) {
      console.log("Errors in updating")
      res.status(404)
    }
    else {
      console.log("Updated Successfully")
      res.status(200)
    }
  })

  res.send();
})

//Delete
app.delete('/delete', (req, res) => {
  const getName = req.params.name
  Users.findOneAndDelete({ name: getName }, (err) => {
    if (err) {
      console.log("Errors in deleting ")
      res.sendStatus(404)
    }
    else {
      console.log("deleted Successfully")
      res.sendStatus(200)
    }
  })
})*/

app.listen(8000, () => {
  console.log('server started on port');
});




