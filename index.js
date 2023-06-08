const express=require("express")
const cors=require("cors")

const app=express()

const accessories=require("./Routes/Accessories")
const ipad=require("./Routes/Ipad")
const mackbook=require("./Routes/Macbook")
const mobile=require("./Routes/Mobile")
const laptop=require("./Routes/Laptop")

app.use(cors())
app.use("/",accessories)
app.use('/',ipad)
app.use("/",mobile)
app.use("/",mackbook)
app.use("/",laptop)




app.get("/about",()=>{
    console.log("you are in the about Page")
})

app.listen(8900,()=>{
    console.log("server is running on the Port no 8900.....")
})