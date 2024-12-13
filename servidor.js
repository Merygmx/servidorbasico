const http=require('http');

const servidor= http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    res.end('Mi Primer Servidor en NodeJS\n');
});

servidor.listen(3000,'127.0.0.1',()=>{
    console.log('El servidor está funcionando en http://127.0.0.1:3000')

});