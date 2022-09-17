const container = document.getElementById("container")
const numeroLinhas = [1,2,3,4,5,6,]
const numeroloColunas = [1,2,3,4,5]

numeroLinhas.forEach(item => {
    const box = document.createElement("div"); //criando a div box
    box.className = "box" //definindo a classe da div pra box
    numeroloColunas.forEach(col => {
        const inputColuna = document.createElement("input") //criando input
        inputColuna.id = `linha${item}coluna${col}`
        inputColuna.maxLength = 1
        inputColuna.disabled = true
        box.appendChild(inputColuna)
    })
    container.appendChild(box)
})

document.getElementsByClassName("")
container.addEventListener("keyup", (a) => {
    console.log(a.target.id)
    if(a.target.id[12] === '5'){
        console.log("cheguei na ultima coluna")
        console.log(a.target.id[5])
        let linha=Number(a.target.id[5])
        atual("linha"+(linha+1)+"coluna1")
        desabilitar(a.target.id)
    }else{
        console.log("n cheguei na ultima coluna")
        proximo(a.target.id)
    }
    
})
function atual(a) {
    console.log(a)
    const elementoAtual = document.getElementById(a);
    elementoAtual.disabled = false
    elementoAtual.focus()    
}
function desabilitar(a) {
    console.log(a)
    const elementoAtual = document.getElementById(a);
    elementoAtual.disabled = true
}

function proximo(a) {
    console.log(a)
    const elementoAtual = document.getElementById(a);
    const elementoAnterior = elementoAtual.previousElementSibling;
    const proximoElemento = elementoAtual.nextElementSibling;

    if(a.key === "Backspace"){
        elementoAnterior.focus()
        elementoAtual.disabled = true
        elementoAnterior.disabled = false
    }else{
        proximoElemento.disabled = false
        elementoAtual.disabled = true
        proximoElemento.focus()
        
        // if(elementoAtual.maxLength === elementoAtual.value.length){
        //     proximoElemento.focus()
        // }
    }    
    
}


document.getElementById("linha1coluna1").disabled = false


// console.log(resultado)