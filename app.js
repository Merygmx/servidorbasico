const express=require('express');
const app=express();
const port=3000;

app.get('/', (req,res)=>{
    res.send('Este es el servidor de CIDEM');
});

app.listen(port,()=>{
    console.log('Servidor CIDEM corriendo en http://localhost:${port}');
});