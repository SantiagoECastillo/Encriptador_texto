const textArea = document.querySelector(".encriptador-texto");
const mensaje = document.querySelector(".desencriptado");
const imagenDesencriptado = document.querySelector(".desencriptar-contenedor");
const copiar = document.querySelector(".btn-copiar");
const contenidoDesencriptador = document.querySelector(".desencriptar-contenedor");


function btnEncriptar(){
    if(textArea.value == ""){
        return
    }
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    contenidoDesencriptador.style.display = 'none';
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    contenidoDesencriptador.style.display = 'none';
}

function btnCopiar(){
    
}

function encriptar(stringEncriptado){
    let matrizCodigo = [["e", "enter"], ["i", "ines"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();
    
    for (let index = 0; index < matrizCodigo.length; index++) {
        if(stringEncriptado.includes(matrizCodigo[index][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[index][0], matrizCodigo[index][1])
        }
    }
    return stringEncriptado;
}


function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e", "enter"], ["i", "ines"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();
    
    for (let index = 0; index < matrizCodigo.length; index++) {
        if(stringDesencriptado.includes(matrizCodigo[index][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[index][1], matrizCodigo[index][0])
        }
    }
    return stringDesencriptado;
}


copiar.addEventListener('click', function() {
    mensaje.select();
    mensaje.setSelectionRange(0, 99999); 


    document.execCommand('copy');

   
    var avisoDeCopia = document.querySelector(".desencriptar-texto-dos");
    var textoMensaje = document.querySelector(".")

    avisoDeCopia.textContent = "Texto copiado al portapapeles!";
    mensaje.value = "";
});

/*
textArea.addEventListener('click', function() {
    mensaje.value = ""
    contenidoDesencriptador.style.display = 'flex';
});
*/