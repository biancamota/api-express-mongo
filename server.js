import  http from "http";

const PORT = 3000;

const server = http.createServer((request, response) => {
    response.writeHead(200, {
        "Content-Type": "text/plain"
    });
    response.end("Curso node");
});

server.listen(PORT, () => {
    console.log('listen');
});