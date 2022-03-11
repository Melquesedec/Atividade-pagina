// document.addEventListener('DOMContentLoaded', function(){
//     var modeSwitch = document.querySelector('.nav-link-esquerda')

//     modeSwitch.addEventListener('click', function(){
//         document.documentElement.classList.toggle('dark')
//         modeSwitch.classList.toggle('active')
//     });
// })

var ativo = 0
var modeSwitch = document.querySelector('.nav-link-esquerda')
if(ativo == 0){
modeSwitch.addEventListener('click', function(){
    document.documentElement.classList.toggle('dark')
    document.querySelector("body").classList.toggle('active')
    document.querySelector("#cabecalho").classList.toggle('active')
    document.querySelector(".bg-dark").classList.toggle('active')
    document.querySelector("#port").classList.toggle('active')
    document.querySelector(".nav-link-direita").classList.toggle('active')
    document.querySelector("#name-a").classList.toggle('active')
    document.querySelector(".nav-link-meio").classList.toggle('active')
    document.querySelector(".nav-link-meio-dois").classList.toggle('active')
    document.querySelector(".nav-link-meio-tres").classList.toggle('active')
    document.querySelector(".nav-link-primeiro").classList.toggle('active')
    document.querySelector("#geral_meio").classList.toggle('active')
    document.querySelector(".nav-link-esquerda").classList.toggle('active')
    document.querySelector("#client").classList.toggle('active')
    document.querySelector("#step").classList.toggle('active')
    document.querySelector("#estrela").classList.toggle('active')
    document.querySelector("#direito").classList.toggle('active')
    document.querySelector("#comentario-um").classList.toggle('active')
    document.querySelector("p").classList.toggle('active')
    document.querySelector(".stepum").classList.toggle('active')
    document.querySelector(".stepdois").classList.toggle('active')
    document.querySelector(".steptres").classList.toggle('active')
    document.querySelector(".estrelaum").classList.toggle('active')
    document.querySelector(".estreladois").classList.toggle('active')
    document.querySelector(".estrelatres").classList.toggle('active')
    document.querySelector(".fa-align-right").classList.toggle('active')
    document.querySelector(".fa-th-large").classList.toggle('active')
    });
    ativo = 1
} else {
    modeSwitch.addEventListener('click', function(){
        modeSwitch.classList.remove('active')
    })
    ativo = 0
}

var ativo = 0
var modeSwitch = document.querySelector('.fa-th-large')
if(ativo == 0){
modeSwitch.addEventListener('click', function(){
    document.documentElement.classList.toggle('dark')
    });
    ativo = 1
} else {
    modeSwitch.addEventListener('click', function(){
        modeSwitch.classList.remove('active')
    })
    ativo = 0
}

