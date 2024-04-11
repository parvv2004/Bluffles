import mongoose from 'mongoose';
const Connection =async ()=>
{ const URL='mongodb://Namita:CodeforInterview@ac-jfsgbft-shard-00-00.zedo8do.mongodb.net:27017,ac-jfsgbft-shard-00-01.zedo8do.mongodb.net:27017,ac-jfsgbft-shard-00-02.zedo8do.mongodb.net:27017/?ssl=true&replicaSet=atlas-uuijb3-shard-0&authSource=admin&retryWrites=true&w=majority&appName=DevJam';
   try{
     await  mongoose.connect(URL,{useUnifiedTopology:true});
     console.log("Database connected successfully");
   }
   catch(error){
       console.log("error while coonecting Database",error.message); 

   }
}
export default  Connection;