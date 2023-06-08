const express=require("express")

const mobileapi=require("../API/Mobile")
const mobile=express.Router()
mobile.route("/mobile").get(mobileapi.apiController)

module.exports=mobile