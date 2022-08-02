const express = require("express");
const uuid = require('uuid').v4;
const path = require('path');

const router = express.Router();

router.get("/",function(req,res){

 
  res.render('index')
  
  });
  
  router.post('/convert',function(req,res){
  
  const fileData =  req.body.csvFileData;

  const fs = require('fs');

  const folderName = path.join(__dirname,'../files');

try {
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName);
  }
} catch (err) {
  console.error(err);
}

  const uniqueId = uuid();
// const content = 'Some content!';
const filePath  = `../files/file${uniqueId}.csv`;
fs.writeFile(path.join(__dirname,filePath), fileData, err => {
  if (err) {
    console.error(err);
  }
  // file written successfully
  
  
  });

 const csv=require('csvtojson')
  csv()
  .fromFile(path.join(__dirname,filePath))
  .then((jsonObj)=>{
      
     const jsonText = JSON.stringify(jsonObj,null,"\t");
  
  
  const fs = require('fs')
  
                  
            
            fs.unlink(path.join(__dirname,filePath), (err) => {
              if (err) {
                console.error(err)
                return
              }
            
              })
            
            
    
    
    res.json({
    message: "File converted!",  
    fileData: jsonText,
    
  });
  });
  
});
  
  
  

module.exports = router;