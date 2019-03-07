const fs = require('fs');
const readline = require('readline');
const markdownLinkExtractor = require('markdown-link-extractor'); // extrae links

const mdlinks = (path, options) => {
  //entrega la ruta
  fs.stat(path, (error, stats) => {
    //stats describe si es un directorio o un archivo
    if (stats.isFile()) {
      //se lee el archivo
      fs.readFile("README.md", (error, data) => {
        console.log(data.toString());
      });
    } else if (stats.isDirectory()) {
      //se lee el directorio 
      fs.readdir(path, (error, files) => {});
    }
  });
};

mdlinks('README.md');