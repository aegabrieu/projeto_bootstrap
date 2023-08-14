//alert("Ola mundo")
// console.log("Só quem é dev vai descobrir")
let nome = document.querySelector("#Nome")
// console.log(nome)

function exibirNome(){
    console.log (Nome.value)
    if(Nome.value = ""){
        Nome.style.border = "2px solid green"
    }
    else{
        Nome.style.border = "2px solid red"

    }

}

nome.addEventListener ("blur",exibirNome)

// nome.addEventListener ("focus", function(){
//     nome.value = "este campo não deve ficar vazio"

// keyup pega enquanto tu digita})


let  idade = document.querySelector("#idade") 

idade.addEventListener("blur", function(){

    if(idade.value >=18){
        alert("Você possui 18 anos")

}
    else{
        alert("infelizmente você não é de maior !")

        // redireciona para link específico
        window.location.href = "https://escolakids.uol.com.br/"
    }

})

let end = document.querySelector("input[name=endereco]")
end.addEventListener("blur",function(){

    if(end.value.length >= 36){
        alert("endereço longo")
        end.style.border = "2px solid red"
    }
    else{
        alert("ok")
        end.style.border = "2px solid yellow"


    }
    console.log(end.value.length)
})



// escreve email em confirmar email 
let email = document.querySelector("#email")
let confirmacao = document.querySelector("#confirmar")

let minusculo = email.value.toLowerCase()

email.addEventListener("keyup",function(){
    let minusculo = email.value.toLowerCase()

    confirmacao.value = email.value

    // indexOf verifica se tem no campo, "||" significa ou; 

    if(minusculo.indexOf("@") == -1 || minusculo.indexOf(".com") == -1){
        console.log ("Email invalido")
        // email.style.border = "2px solid red"
        email.classList.add("border-danger")
        email.classList.remove("border-success")
    }
    else{
        console.log("Email válido")
        // email.style.border = "2px solid green"
        email.classList.add("border-success")
        email.classList.remove("border-danger")
    }


    // verifica se no index do texto em @
     console.log(email.value.indexOf("@"))


})

let senha = document.querySelector("#senha")
let btn_eye = document.querySelector(".fa-eye")

// ()=>() isto é uma arrow function, ou seja uma versão resumida da versão anonima 
btn_eye.addEventListener("click", ()=>{
    if(btn_eye.classList.contains("fa-eye")){
        // console.log("a classe existe")
        btn_eye.classList.remove("fa-eye")
        btn_eye.classList.add("fa-eye-slash")

        senha.setAttribute("type", "text")

    }
    else{
        // console.log("a classe não existe")
        btn_eye.classList.remove("fa-eye-slash")
        btn_eye.classList.add("fa-eye")

        senha.setAttribute("type", "password")
    }
})


// pegando dados do campo radio
let escolaridade = document.querySelector("input[name=escolaridade]")
let btnescolaridade = document.querySelector("#btnescolaridade")

btnescolaridade.addEventListener("click",(evento)=>{
    // console.log(evento)
    evento.preventDefault(valor)
    // valor.preventDefault()  //função impede o comportamento padrao do botao


    console.log(escolaridade[0])
    for(let itens of escolaridade){
        // console.log(itens)
        if(itens.checked){
            alert(`Sua escolaridade é $ {itens.value}`)

            // alert("Sua escolaridade é "+itens.value)
            // confirm("tem certeza ?")
            // console.log(itens)
        }
        
    }
})

let escolha = document.querySelector("#escolha")
let contrato = document.querySelector("#contrato")

contrato.classList.add("d-none")

escolha.addEventListener("change", ()=>{
    if(escolha.checked){
        contrato.classList.remove("d-none")
        contrato.classList.add("d-block")
        // alert("Obrigado por concordar! ")
    }    
    else{
        contrato.classList.remove("d-block")
        contrato.classList.add("d-none")
        // alert("Aceite o contrato novamente !")
    }


})

let concordo = document.querySelector("#concordo")

concordo.addEventListener("change", ()=>{
    if(concordo.checked){
        alert("obrigado pela escolha")
    }
    else{
        alert("aceite novamente")
        let mensagem = prompt("Porque você desmarcou ?") 
        //  cria uma caixa de texto
    }


})

let trabalho = document.querySelector(".form-select")
trabalho.addEventListener("change", ()=>{
    // console.log(trabalho,options)

    for(let itens of trabalho){
        if(itens.selected){
            // console.log(itens.value)
            if(itens.value == "RH"){
                trabalho.style.backgroundColor = "cyan"
            }
            if(itens.value == "tecnologia"){
                trabalho.style.backgroundColor = "brown"
            }
            if(itens.value == "financeiro"){
                trabalho.style.backgroundColor = "purple"
            }
        }
    }
})

let cor = document.querySelector("#cor")
cor.addEventListener("change", ()=>{
    console.log(cor.value)
    document.body.style.backgroundColor = cor.value

})

let mensagem = document.querySelector("#mensagem")
let restante = document.querySelector("#restante")



let limite = 20
mensagem.addEventListener("keyup", ()=>{
    // console.log(mensagem.value.length)
    restante.textContent = mensagem.value.length

    mensagem.setAttribute("maxlength", limite)
    console.log(restante.parentNode)

    if(restante.textContent == 20){
        mensagem.classList.add("border-danger")
        restante.parentNode.style.color = "red"
    }
    else{
        mensagem.classList.remove("border-danger")
        restante.parentNode
    }

})