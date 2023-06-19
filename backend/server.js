const mongoose = require('mongoose');
const express = require('express');
const { mscs } = require('../backend/models/model');
const data = require('./full_DB_Data.json');

const router = express.Router();
const app = express()

const Data = require(
    '../backend/models/model'
).mscs

app.use(express.json())

const mongoURL = 'mongodb+srv://vishnu:PD6dzndTiXwE1qjF@mscs.goqmvxl.mongodb.net/MSCS_DB'

mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB', error);
  });

app.use(express.json());

const realData = Object.values(data);

app.get('/test', async (req,res)=>{
      try{
        console.log("CAME HERE");

        // RUN THE CODE BELOW TO POPULATE AND IMPORT THE DATA TO MONGODB. (RUN IT ONLY ONCE TO AVOID UPLOADING MULTIPLE TIMES.)
        
        let c = 0;
        await Data.deleteMany({})
        for await(let i of realData){
          let date = null;
          let stringDate = i.date_of_registration;
          if(stringDate){
            var dateString = "2022-10-13";
            var dateParts = dateString.split("-");
            var year = parseInt(dateParts[0]);
            var month = parseInt(dateParts[1]) - 1; // JavaScript months are zero-based
            var day = parseInt(dateParts[2]);
            date = new Date(year, month, day);
            console.log(date)
          }

          await Data.create({
            sr_no : i.sr_no,
            name_of_society : i.name_of_society,
            address : i.address,
            state : i.state,
            district : i.district,
            date_of_registration : i.date_of_registration,
            area_of_operation : i.area_of_operation,
            sector_type : i.sector_type
          })
              console.log("CREATED FOR " + c++);
        }
        
        let data = await mscs.find({});
        return res.json({
            status : "SUCCESS",
            data : data
        })
    }
    catch(err)
    {
      console.log(err);
    }
}
)

app.listen(3000, (err, res) =>{
  console.log("Listening on port 3000");
});

module.exports = router;