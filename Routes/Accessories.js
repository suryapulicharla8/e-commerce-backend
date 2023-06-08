const express=require("express");

const accessoriesapi=require("../API/Accessories")

const accessories=express.Router()
accessories.route("./accessories").get(accessoriesapi.apiController)

module.exports=accessories