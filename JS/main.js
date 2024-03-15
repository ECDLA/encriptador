function accionEnter() {
    // Se obtiene el elemento con id textoUsuario y se le agrega un evento
    document.getElementById('textoUsuario').addEventListener('keydown', function (e) {

        // Si la tecla presionada es "Enter"
        if (e.key === 'Enter') {
            // Se llama a la función desencriptar
            desencriptar();

            // Se previene el comportamiento por defecto del evento
            e.preventDefault();

            // Dirigir a vinculo con id textoMostrar
            document.getElementById('textoMostrar').scrollIntoView();
        }
    });
}

// Definir funciones
function desencriptar() {
    let textoUsuario = document.getElementById('textoUsuario').value;
    /*
    La letra "e" es convertida para "enter"
    La letra "i" es convertida para "imes"
    La letra "a" es convertida para "ai"
    La letra "o" es convertida para "ober"
    La letra "u" es convertida para "ufat"
    */
   
    let textoEncriptado =
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
    document.getElementById('mensajeEncriptado').innerHTML = textoEncriptado;
}

