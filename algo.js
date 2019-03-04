let fs = require('fs');
let fetch = require('node-fetch');
let path = require('path');
let anyDocument = process.argv[2];
let markdownLinkExtractor = require('markdown-link-extractor');
readline = require('readline');
let pathRuta = "";

let mdLinks = (pathRuta) =>{
    pathRuta = path.resolve(anyDocument);
    let markdown = fs.readFile(pathRuta).toString();
    let link = markdownLinkExtractor(markdown);
    let arregloLinks = [];
    //recorrer lineas
    for(let i=0; i < link.length; i++){
        const url= link[i];

    //mostrar cuales estan rotos
    let arregloFetch = fetch(link[i])
        .then((res)=>{
            let infoLinks = {
                url:`${res.url}`,
                status:`${res.status}`,
                text: `${res.text}`
            }
            return infoLinks;
        })
        .catch((err)=>{
            let falla = {
                urlLink: `${url}`,
                satusLink:"error",
            }
        })
        result.push(arregloFetch);
    }
    Promise.all(arregloLinks)
        .then((lineaLinks)=>{
            console.log(lineaLinks)
        })
        .catch(console.error)
};
mdLinks();