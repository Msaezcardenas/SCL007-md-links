const readLine = require('readline');
const md = require('./prueba.js');

if (require.main === module) {
  console.log ('Ingresa archivo o carpeta');
  const rl = readLine.createInterface({ // Pausa en consola, para que el usuario escriba
    input: process.stdin,
    output: process.stdout,
    terminal: false,
  });
 
  rl.on('line', (line) => { // captura lo que escribió el usuario, hasta enter
    let arrayCapture = [];
    arrayCapture = line.split('--');
    const path = arrayCapture[0];
    const option = String(arrayCapture[1]).trim();
    md.mdPathLinks(path);
    rl.close();
  });
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