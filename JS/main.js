let textoUsuario = "";
let textoMostrar = "";

function accionEnter() {
    // Se obtiene el elemento con id textoUsuario y se le agrega un evento
    document.getElementById('textoUsuario').addEventListener('keydown', function (e) {

        // Si la tecla presionada es "Enter"
        if (e.key === 'Enter') {
            // Se previene el comportamiento por defecto del evento
            e.preventDefault();

            
        }
    });
}

function encriptar() {
    textoUsuario = document.getElementById('textoUsuario').value;
    /*
    La letra "e" es convertida para "enter"
    La letra "i" es convertida para "imes"
    La letra "a" es convertida para "ai"
    La letra "o" es convertida para "ober"
    La letra "u" es convertida para "ufat"
    */
   
    textoMostrar =
        textoUsuario
        .replace(/[Eeé]/g, "enter")
        .replace(/[Iií]/g, "imes")
        .replace(/[Aaá]/g, "ai")
        .replace(/[Ooó]/g, "ober")
        .replace(/[Uuú]/g, "ufat")

    // Se ocultan los elementos con clases textoSalidaAviso__uno y textoSalidaAviso__dos
    document.querySelector('.textoSalida__aviso').style.display = 'none';

    // Se muestran los elementos con clases textoSalida__mensaje
    document.querySelector('.textoSalida__mensaje').style.display = 'flex';

    // Se muestra el texto convertido en el elemento con id mensajeEncriptado
    document.getElementById('mensajeEncriptado').innerHTML = textoMostrar;

    // Dirigir a vinculo con id textoMostrar
    document.getElementById('textoMostrar').scrollIntoView();
}

function desencriptar() {
    textoUsuario = document.getElementById('textoUsuario').value;

    textoMostrar =
        textoUsuario
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u")

    // Se ocultan los elementos con clases textoSalidaAviso__uno y textoSalidaAviso__dos
    document.querySelector('.textoSalida__aviso').style.display = 'none';

    // Se muestran los elementos con clases textoSalida__mensaje
    document.querySelector('.textoSalida__mensaje').style.display = 'flex';
    
    document.getElementById('mensajeEncriptado').innerHTML = textoMostrar;

    // Dirigir a vinculo con id textoMostrar
    document.getElementById('textoMostrar').scrollIntoView();
}

function copiar() {
    // Al hacer clic en el botón con id btnCopiar copiar contenido de la variable textoMostrar a la papelera
    navigator.clipboard.writeText(textoMostrar);
    console.log('Texto copiado');

}