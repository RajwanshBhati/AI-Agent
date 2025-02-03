import mongoose from "mongoose";

console.log(process.env.MON);

function connect () {
    mongoose.connect(process.env.MON)
    .then(()=>{
        console.log("connected to mongodb");
        
    }).catch(err => {
        console.log(err);
        
    })
}

export default connect;