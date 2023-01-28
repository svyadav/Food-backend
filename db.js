const mongoose=require('mongoose')
mongoose.set('strictQuery', false);


const mongoURI=`mongodb+srv://sachinyadav:Developer123@sachin.uhlse2y.mongodb.net/gofoodmern`

const mongoDB=async()=>{
    await mongoose.connect(mongoURI,async(err,result)=>{
        if(err) console.log("----",err)
        else{
            console.log("Connected to mongoDB")
            const fetched_data=await mongoose.connection.db.collection("food_items");
            fetched_data.find({}).toArray(async function(err,data){
                const foodCategory=await mongoose.connection.db.collection("foodCategory");
                foodCategory.find({}).toArray(function(err,catData){
                    if(err) console.log(err);
                    else 
                      global.food_items=data;
                      global.foodCategory=catData;
                })
                // if(err) console.log(err);
                // else 
                // global.food_items=data;
                
            })

        }
      
    })

}

module.exports=mongoDB;