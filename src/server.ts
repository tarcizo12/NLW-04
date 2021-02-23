import express, { request, response } from 'express';

const app=express();
/**
 * GET=> Busca
 * POST=> Salvar
 * PUT=> Alterar
 * DELETE=>Deletar
 * PATCH=> Alterar especifico
 * 
 * 
 * 
 * 
 */

 //Verificar a rota >http://localhost:3333/users<
app.get("/", (request , response) =>{
return response.json({ message: "Tarcizo!"} );
}
);

app.post("/", (request , response) =>{
    return response.json({ message: "Deu certo!"} );
    }
    );
app.listen(3333,()=>console.log("Server is running") );