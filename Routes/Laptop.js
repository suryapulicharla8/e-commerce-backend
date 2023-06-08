const express=require("express")

const laptopapi=require("../API/Laptop")

const laptop=express.Router()
laptop.route("/laptop").get(laptopapi.apiController)

module.exports=laptop