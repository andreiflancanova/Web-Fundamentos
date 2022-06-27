/*
    Variáveis em JS
    var: Variável de escopo global. Pode ser acessada de qualquer parte do código.
    let: Se usa mais por boas práticas.

    O JS foi adotado há algum tempo como linguagem universal do Front. A empresa que tem direitos
    de atualização do JavaScript é a EcmaScript. O let é uma update da release 8 da EcmaScript.
    const: É uma variável que não é alterada. Será pouco utilizada por agora.
*/

/*
    Alternativas para acesso ao DOM
    JS é uma linguagem Case Sensitive

    Acesso por tag:     getElementByTagName()
    Acesso por Id:      getElementById()        <-- Muito usado
    Acesso por Nome:    getElementsByName()
    Acesso por Classe   getElementsByClassName()
    Acesso por Seletor: querySelector()         <-- Muito usado, por ser bem versátil

*/


// VALIDAÇÃO DOS CAMPOS

// Validação do nome
let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")
let coment = document.querySelector("#coment")
let nomeOk = false
let emailOk = false
let assuntoOk = false
let comentOk = false
let mapa=document.querySelector("#mapa")

    /*  Se for uma classe, chama pelo input.email;
        Se for um id, chama pelo input#email;
        Também é possível fazer #email;   */

nome.style.width="100%"
email.style.width="100%"
assunto.style.width="100%"


function validaNome(){
    let textoNome=document.querySelector("#TextoNome")
    if(nome.value.length < 3) {
        textoNome.innerHTML="Nome inválido!"
        textoNome.style.color="red"
    } else{
        textoNome.innerHTML="Nome válido!"
        textoNome.style.color="green"
        nomeOk = true
    }
}

function validaEmail(){
    let textoEmail=document.querySelector("#TextoEmail")
    if(email.value.indexOf("@")==-1 || email.value.indexOf(".")==-1){
        textoEmail.innerHTML="E-mail inválido!"
        textoEmail.style.color="red"
    }else{
        textoEmail.innerHTML="E-mail válido!"
        textoEmail.style.color="green"
        emailOk = true
    }
}

function validaAssunto(){
    let textoAssunto=document.querySelector("#TextoAssunto")
    if(assunto.value.length >= 30) {
        textoAssunto.innerHTML="Assunto digitado muito grande! Digite até 30 caracteres"
        textoAssunto.style.color="red"
        textoAssunto.style.display="block"
    } else{
        textoAssunto.style.display="none"
        assuntoOk = true
    }
}

function validaComentario(){
    let textoComentario=document.querySelector("#TextoComentario")
    if(coment.value.length >= 50) {
        textoComentario.innerHTML="Assunto digitado muito grande! Digite até 50 caracteres"
        textoComentario.style.color="red"
        textoComentario.style.display="block"
    } else{
        textoComentario.style.display="none"
        comentOk = true
    }
}

function enviar() {
    if(nomeOk==true && emailOk==true && assuntoOk==true && comentOk==true){
        alert("Formulário enviado com sucesso!")
    }else {
        alert("Preencha o formulário corretamente antes de enviar.")
    }    
}

function mapaZoom(){
    mapa.style.width="800px"
    mapa.style.height="500px"
}

function mapaNormal(){
    mapa.style.width="400px"
    mapa.style.height="250px"
}