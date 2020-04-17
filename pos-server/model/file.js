const fs = require('fs');
const path = require('path');
exports.deleteFile = (filename)=>{
    if(filename){
        let filePath = path.join(__dirname,'../public',`${filename}`);
        fs.unlinkSync(filePath);
    }else{
        return
    }
    
}