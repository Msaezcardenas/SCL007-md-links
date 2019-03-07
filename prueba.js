const fs = require('fs');
const readline = require('readline');
const markdownLinkExtractor = require('markdown-link-extractor'); // extrae links

//defino mi función...
const mdlinks = (path, options) => {
  //entrega la ruta
  fs.stat(path, (error, stats) => {
    //stats describe si es un directorio o un archivo
    if (stats.isFile()) {
      //se lee el archivo
      // fs.readFile(path, (error, data) => {
      //   console.log(data.toString());
      // });
      let markdown = fs.readFileSync(path).toString();
      let links = markdownLinkExtractor(markdown);
      links.forEach(function (link) {
        console.log(link);
      });

    } else if (stats.isDirectory()) {
      //se lee el directorio 
      fs.readdir(path, (error, files) => {});
    }
  });
};

// var markdown = fs.readFileSync('READMEproyecto.md').toString();

// var links = markdownLinkExtractor(markdown);

// links.forEach(function (link) {
//   console.log(link);
// });

// // La uso...
mdlinks('READMEproyecto.md');