const express=require("express")

const ipadapi=require("../API/Ipad")

const ipad=express.Router()
ipad.route("/ipad").get(ipadapi.apiController)

module.exports=ipad