let texto_usuario=document.querySelector("#textoUsuario");
let texto_resultado=document.querySelector("#textoResultado");

const matriz_code = [
    ["e","enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
];

function btnEncriptar() {
    let texto = encriptar(texto_usuario.value);
    texto_resultado.value = texto;
}

function btnDesencriptar(){
    let texto = desencriptar(texto_usuario.value);
    texto_resultado.value = texto;
}

function btncopiar(){
    let texto = texto_usuario.value;

    if (texto !== ""){
        texto_resultado.select();
        //Se utiliza el metodo execCommand para copiar texto en el porta papeles, pero es un metodo que no se usa mucho en los nuevos navegadores
        //document.execCommand('copy');
        //Utiliza la API de Clipboard para copiar el texto al portapapeles de una manera más moderna y segura.
        navigator.clipboard.writeText(texto_resultado.value);
        alert("Texto copiado");
    }else{
        alert("No hay nada que pueda copiar.");
    }
    
}

function desencriptar(fraseDesencriptada){
    for  (let i=0; i < matriz_code.length; i++){
        if(fraseDesencriptada.includes(matriz_code[i][1])){
            fraseDesencriptada = fraseDesencriptada.replaceAll(matriz_code[i][1], matriz_code[i][0]);
        }
    }
    return fraseDesencriptada;
}

function encriptar(fraseEncriptada){
    for (let i=0 ; i < matriz_code.length ; i++){
        if(fraseEncriptada.includes(matriz_code[i][0])){
           fraseEncriptada = fraseEncriptada.replaceAll(matriz_code[i][0],matriz_code[i][1]);
        }
    }
    return fraseEncriptada;
}


