const mongoose = require("mongoose");
const mongoURI = "mongodb+srv://xpresscode:zf4U82o4K40lRPQW@products.a6t4sqa.mongodb.net/foodHut_Mohammad_Zeeshan?retryWrites=true&w=majority";

const mongoDB = async () => {

  await mongoose.connect(mongoURI, { useNewUrlParser: true, useunifiedTopology: true },

    async (err, result) => {
      
      if (err) console.log("---", err);
      else {
        console.log("dbconnected");

        const fetched_data = await mongoose.connection.db.collection("food_items");
        fetched_data.find({}).toArray(async function (err, data) {
          if (err) console.log(data);
          else {
            global.food_items = data;
          }
        });

        const foodCategory = await mongoose.connection.db.collection("foodCategory");
        foodCategory.find({}).toArray(function (err, catData) {
          if (err) console.log(data);
          else {
            global.foodCategory = catData;
          }
        });

      }
    }
  );
};


module.exports = mongoDB;
