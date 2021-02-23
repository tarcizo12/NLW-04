// function enviarEmail(para,id,assunto, texto){
//     //Biblioteca de envio de email
//     console.log(para, id , assunto, texto);
// }

// class EnviarEmailParaUsuario {
// send(){
//     enviarEmail("tarcizon12@gmail.com",933,"compras","quero comprar algo de voce")
// }
// }

interface DadosDeEnvioEmail{
        para: string;
        id: string;
        assunto: string;
        texto: string;
}

function enviarEmail({para,id, assunto,texto }: DadosDeEnvioEmail){
    console.log(para, id , assunto, texto);
};

class EnviarEmailParaUsuario{
    send(){
        enviarEmail("tarcizn12@gmail.com","922","Descobertas", "descobrindo"); 
        
    }
}