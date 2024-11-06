import mongoose from "mongoose"

const DB_Connection = 'mongodb+srv://LibraryK123:Kapil12@cluster0.wn8zk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const connected = mongoose.connect(DB_Connection)
.then(()=>{
    console.log("DB is Connected")
})


export default connected;