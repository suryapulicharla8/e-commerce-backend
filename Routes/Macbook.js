const express=require("express")

const mackbookapi=require("../API/Macbook")
const mackbook=express.Router()
mackbook.route("/mackbook").get(mackbookapi.apiController)

module.exports=mackbook