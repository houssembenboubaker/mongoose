const mongoose=require("mongoose")
require('dotenv').config()
const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('db is connected')
    } catch (error) {
        console.log({msg:'db is not conncted',error})
    }
}
module.exports = connectDB;