import mongoose from "mongoose"

class DB{
    
    async connectDatabase(){
       try {
        const connection = await mongoose.connect(process.env.MONGODB_URI)
        if (connection) {
            console.log("Connecting DB...")
        }
       } catch (error) {
        console.log("DB Connection Error: ", error)
        process.exit(1);
       }
       finally{
        console.log("DB Connected!")
       }
    }
}

export default new DB()