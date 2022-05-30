const express=require('express')
const connectDB = require('./config/DB')
const app =express()
const port=process.env.PORT || 5000
const  userRouter=require('./route/userRoute')
//db connection
connectDB()
//middelware
app.use(express.json())
app.use("/api",userRouter)
app.listen(port,console.log(`server is up and running on http://localhost${port}`))     