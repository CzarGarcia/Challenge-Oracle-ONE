function ocultarElementos(){
    document.getElementById("muñeco").style.display = "none";
    document.getElementById("mostrar").style.display = "initial";
    document.getElementById("copiar").style.display = "initial";
}

function textoVacio(){
    document.getElementById("muñeco").style.display = "initial";
    document.getElementById("mostrar").style.display = "none";
    document.getElementById("copiar").style.display = "none";
}

function encriptar(){
    var frase = document.getElementById("textotarea").value;
    var textotarea = frase.replace(/e/img, "enter");
    var textotarea = textotarea.replace(/i/img, "imes");
    var textotarea = textotarea.replace(/a/img, "ai");
    var textotarea = textotarea.replace(/o/img, "ober");
    var textotarea = textotarea.replace(/u/img, "ufat");
    
    if(frase == ""){
        textoVacio();  
    }else{
        ocultarElementos()
    }

    document.getElementById("textoEncriptado").innerHTML = textotarea;
}

function desencriptar(){

    var frase = document.getElementById("textotarea").value;
    var textotarea = frase.replace(/enter/img, "e");
    var textotarea = textotarea.replace(/imes/img, "i");
    var textotarea = textotarea.replace(/ai/img, "a");
    var textotarea = textotarea.replace(/ober/img, "o");
    var textotarea = textotarea.replace(/ufat/img, "u");

    document.getElementById("textoEncriptado").innerHTML = textotarea;

    if(frase == ""){
        textoVacio();  
    }else{
        ocultarElementos()
    }
}

function copiarTexto(){
    var copiado = document.getElementById("textoEncriptado");
    copiado.select();
    document.execCommand("copy");
    var mensajeCopiado = document.getElementById("mensajeCopiado");
    mensajeCopiado.style.display = "block";
    document.getElementById("copiar").style.display = "none";
    setTimeout(function() {
        mensajeCopiado.style.display = "none";
        document.getElementById("copiar").style.display = "initial";
    }, 1000);
}

var btn = document.querySelector("#encriptar");
btn.onclick = encriptar;

var btnDesncriptar = document.querySelector("#desencriptar");
btnDesncriptar.onclick = desencriptar;

var btnCopiar = document.querySelector("#copiar");
btnCopiar.onclick=copiarTexto;
