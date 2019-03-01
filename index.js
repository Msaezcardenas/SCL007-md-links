const md = require('./prueba.js');

if (require.main === module) {
  console.log ('Ingresa archivo o carpeta');
  md.mdPathLinks();
}


// const readline = require('readline');
// const fs = require('fs');

// let myInterface = readline.createInterface({
//   input: fs.createReadStream('README.md')
// });

// const printData= (data) => {
//   console.log(`${data}`);
// };

// myInterface.on('line', printData);