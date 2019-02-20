//Importa el modulo de http de node.js
var http = require("http");


//El servidor escucha en el puerto 8080
const PORT = 8080;


function handleRequest(require,response){
    console.log("Server Responded");
    response.end("Respuesta aqui");
}

var server = http.createServer(handleRequest);

//Inicialización del servidor
server.listen(PORT,()=>{
    console.log("El server está escuchando en http://localhost:%s",PORT);
    
})