const fs = require('fs');

const readFile = (fileName) => {  
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, data) => {
      if(err) return reject(err);
      resolve(data.toString());
    })
  });
}

const fileNames = ["1.txt", "2.txt", "3.txt"]
const promises = fileNames.map(readFile);

Promise.all(promises)  
  .then((results) => {
    let data = 0;
    results.forEach((item) => {
      data += parseInt(item);
    });
    console.log("Result was: ", data);
  })
  .catch((err) => {
    console.log("Failed:", err);
  });