
import http from "node:http";

const PORT = 3333;

 const server = http.createServer((request, response) => {

    const {url, method} = request;

    response.setHeader("Content-Type", "text/plain; charset=utf8")

    response.write(`
        Requisição na url: ${url}
        Requisição no método: ${method}
        `);


    response.end();

});

server.listen(PORT, 'localhost', () =>{
    console.log(`Server running at http://localhost:${PORT}.`);
});

