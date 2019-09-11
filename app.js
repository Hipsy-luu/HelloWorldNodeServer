const http = require("http");
const fs = require("fs");

exports.init = ()=>{
    //Sincronizado
    http.createServer(
        (request, response) =>{
            fs.readFile(
                "./index.html" , 
                (err,obj)=>{ 
                    if(err){
                        response.writeHead( 404 , {"Content-Type":"application/json"});
                        response.write(err);
                    }else{
                        response.writeHead( 200 , {"Content-Type":"text/html"});
                        response.write(obj);
                    }
                    response.end();
                }
            );
        }
    ).listen(1111);
}

//Asincrono
/*
exports.init = () => {
    const html = fs.readFile("./indec.html");
    function onRequest(request, response){
        response.writeHead(200,{"Contente-Type": "text/html"});
        response.write(html);
        response.end();
    }
    http.createServer(onRequest).listen(1111);
}*/