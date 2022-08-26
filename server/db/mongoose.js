//const express = require('express');
//const mongoose = require('mongoose');
//import express from 'express'
import mongoose from 'mongoose'
import autoIncrement from 'mongoose-auto-increment'
//const mongodb = require('mongodb')
//const MongoClient = require('mongodb').MongoClient
//const app = express();


export const Connection = async ()=>{

  const Url = "mongodb+srv://Hemanth:Hemanth@cluster0.8u1wysv.mongodb.net/Accounts"

  try{
  mongoose.connect(Url,{useUnifiedTopology : true,useNewUrlParser:true});
  console.log("db connected successfully")
  }
  catch(err) {
  console.log('Error while connecting with db')
  }
}

//DB Schema

export const Users = mongoose.model('users', {
  firstname: {
    type: String,
    required: true
  },
  lastname:{
    type :String,
    required:true
  },
  mobilenumber:{
    type:Number,
    required:true
  },
  age:{
    type:Number, 
    required:true
  }
})

