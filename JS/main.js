let textoUsuario = "";
let textoMostrar = "";

let buscar = /enter|imes|ai|ober|ufat/g;

let palabraRemplazar = {
    'enter': 'e',
    'imes': 'i',
    'ai': 'a',
    'ober': 'o',
    'ufat': 'u'
};

let letrasRemplazar = {
    'E': 'enter',
    'e': 'enter',
    'é': 'enter',
    'I': 'imes',
    'i': 'imes',
    'í': 'imes',
    'A': 'ai',
    'a': 'ai',
    'á': 'ai',
    'O': 'ober',
    'o': 'ober',
    'ó': 'ober',
    'U': 'ufat',
    'u': 'ufat',
    'ú': 'ufat'
};


function mostrarCajaTextoMostrar() {
    // Se ocultan los elementos con clases textoSalidaAviso__uno y textoSalidaAviso__dos
    document.querySelector('.textoSalida__aviso').style.display = 'none';

    // Se muestran los elementos con clases textoSalida__mensaje
    document.querySelector('.textoSalida__mensaje').style.display = 'flex';

    // Se muestra el contenido de la variable textoMostrar en el elemento con id mensajeEncriptado
    document.getElementById('mensajeEncriptado').innerHTML = textoMostrar;

    // Dirigir a vinculo con id textoMostrar
    document.getElementById('textoMostrar').scrollIntoView();
}

function accionEnter() {
    // Se obtiene el elemento con id textoUsuario y se le agrega un evento
    document.getElementById('textoUsuario').addEventListener('keydown', function (teclaPresionada) {

        // Si la tecla presionada es "Enter"
        if (teclaPresionada.key === 'Enter') {

            // Se previene el comportamiento por defecto del evento
            teclaPresionada.preventDefault();
        }
    });
}

// Función para encriptar el texto ingresado por el usuario
function encriptar() {
    // Se obtiene el valor del elemento con id textoUsuario y se almacena en la variable textoUsuario
    textoUsuario = document.getElementById('textoUsuario').value;

    // Se reemplazan las letras por las palabras correspondientes
    textoMostrar = textoUsuario.replace(/./g, function(char) {

        // Si el valor de char es igual a alguna de las claves del objeto letrasRemplazar, se reemplaza por el valor correspondiente
        // Si no, se mantiene el valor de char
        return letrasRemplazar[char] || char;
    });

    // Se llama a la función mostrarCajaTextoMostrar
    mostrarCajaTextoMostrar();
}

function desencriptar() {
    // Se obtiene el valor del elemento con id textoUsuario y se almacena en la variable textoUsuario
    textoUsuario = document.getElementById('textoUsuario').value;

    // Se reemplazan las palabras por las letras correspondientes
    textoMostrar = textoUsuario.replace(buscar, function(char) {
        // Si el valor de char es igual a alguna de las claves del objeto palabraRemplazar, se reemplaza por el valor correspondiente
        // Si no, se mantiene el valor de char
        return palabraRemplazar[char] || char;
    });

    // Se llama a la función mostrarCajaTextoMostrar
    mostrarCajaTextoMostrar();
}

// Función para copiar el texto mostrado en el elemento con id mensajeEncriptado
function copiar() {
    
    // Al hacer clic en el botón con id btnCopiar copiar contenido de la variable textoMostrar a la papelera
    navigator.clipboard.writeText(textoMostrar);
}