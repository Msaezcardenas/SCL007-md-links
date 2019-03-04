const fs = require('fs');

//llama al modulo que extrae los links del texto
const markdownLinkExtractor = require('markdown-link-extractor');

module.exports ={ 

//Guarda en esta variable la ruta del archivo. Verifica si es ruta absoluta o relativa 
mdPathLinks: (path,option) => {

  //si es carpeta...
  const pathFolder = String(path).trim();  //elimina espacios en la ruta ingresada por el usuario
  
  // con la sig, linea me devuelve  un -1 si la ruta existe o no 
  if (String(pathFolder).indexOf('md')!== -1){

    //guarda la lectura del archivo
    const extractlinkMd = fs.readFileSync(path).toString();
    
    //extrae los links del archivo MD
    const links = markdownLinkExtractor(extractlinkMd);

    links.forEach(function (line){
        console.log(line)
    });
  }

},
};


