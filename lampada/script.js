var fundo = document.querySelector("body");
var h1 = document.querySelector("h1");
var hum = document.querySelector("#h1");
var h2 = document.querySelector("h2");
var lampada = document.querySelector("#lampada");
var areaLampada = document.querySelector("#area-lampada");
var bola = document.querySelector("#bola");

lampada.addEventListener("click", function(){
    fundo.style.backgroundColor = "white";
    h1.style.display = "none";
    hum.style.color = "black";
    hum.innerHTML = "🎉ACHOU !!🎉";
    h2.style.display = "none";
    lampada.setAttribute("src", "lampadaAcesa.png");
    areaLampada.style.left = "550px"
    bola.style.display = "block";
    botao.style.display = "none"
    botaoUm.style.display = "none"
    botaoDois.style.display = "none"
    botaoTres.style.display = "none"
    botaoQuatro.style.display = "none"
})

setTimeout(function(){
    areaLampada.style.display = "block"
},3000)

var botao = document.querySelector("#acende");
var botaoUm = document.querySelector("#botao-um");
var botaoDois = document.querySelector("#botao-dois");
var botaoTres = document.querySelector("#botao-tres");
var botaoQuatro = document.querySelector("#botao-quatro");

botao.addEventListener("click", function(){
    botaoUm.style.display = "block"
})

botaoUm.addEventListener("click", function(){
    botaoDois.style.display = "block"
})

botaoDois.addEventListener("click", function(){
    botaoTres.style.display = "block"
})

botaoTres.addEventListener("click", function(){
    botaoQuatro.style.display = "block"
})

botaoQuatro.addEventListener("click", function(){
    alert("Talvez uma luz possa nos ajudar 🤔")
})

