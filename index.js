// const readLine = require('readline');
// const md = require('./prueba.js');

// // Pausa en consola, para que el usuario escriba
// if (require.main === module) {
//   console.log ('Ingresa archivo o carpeta');
//   const rl = readLine.createInterface({
//     input: process.stdin,
//     output: process.stdout,
//     terminal: false,
//   });

//  // captura lo que escribió el usuario
//   rl.on('line', (line) => {
//     let arrayCapture = [];
//     arrayCapture = line.split('--');
//     const path = arrayCapture[0];
//     const option = String(arrayCapture[1]).trim();
//     md.mdPathLinks(path);
//     rl.close();
//   });
// }





//otra forma de leer...
// const readline = require('readline');
// const fs = require('fs');

// let myInterface = readline.createInterface({
//   input: fs.createReadStream('README.md')
// });

// const printData= (data) => {
//   console.log(`${data}`);
// };

// myInterface.on('line', printData);