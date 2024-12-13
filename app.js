const express=require('express');
const app=express();
const port=3000;

app.get('/', (req,res)=>{
    res.send('Este es el servidor de Meredith');
});

app.listen(port,()=>{
    console.log(`Este es el servidor corriendo en http://localhost:${port}`);
});