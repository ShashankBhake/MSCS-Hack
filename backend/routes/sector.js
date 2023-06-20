const express = require('express')
const router = express.Router()
const app = express()

const { mscs } = require('../models/model');


var stateSector = require('../full_DB_Data.json')
router.get('/', async (req, res) => {
    try{
        res.json(stateSector.state_district_sector)
    }
    catch(err)
    {
      console.log(err);
    }
  }
  );

  


  router.get('/', (req, res) => {
    try{}catch(err){}
  })

  module.exports = router


