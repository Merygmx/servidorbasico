const express=require('express');
const app=express();
const port=3000;

//middleware para registrar solicitudes
const logger=(req,res,next)=>{
    console.log(`{req.method} ${req.url}`);
    next(); //pasa a la sig ruta de ejecución
};

app.use(logger);

app.get('/',(req,res)=>{
    res.send('Mensaje enviado');
});

app.listen(port,()=>{
    console.log(`Este es el servidor corriendo en http://localhost:${port}`);
});