const fs = require('fs');

const readFile = (fileName,callback) => {
  fs.readFile(fileName, (err, data) => {
    if(err) return err;
    callback(data.toString());
  });
}

readFile('1.txt', (data) => {
  let result = data;
  readFile('2.txt', (data) => {
    result += data;
    readFile('3.txt', (data) => {
      result += data;
      readFile('4.txt', (data) => {
        result += data;
        readFile('5.txt', (data) => {
          result += data;
          readFile('6.txt', (data) => {
            result += data;
            console.log(result);
          });
        });
      });
    });
  });
});
