
//encriptador de texto
    function encriptar() {
        let texto = document.getElementById("texto").value;
        let clave = {
            "a": "1",
            "e": "2",
            "i": "3",
            "o": "4",
            "u": "5"
        }
        let textoEncriptado = "";
        for (const element of texto) {
            if (element in clave) {
                textoEncriptado += clave[element];
            } else {
                textoEncriptado += element;
            }
        }
        
    


//poner el texto encriptado/desencriptador en el textarea
        document.getElementById("Respuesta").value = textoEncriptado;
    }



//copiar texto al portapapeles
  function copiarTexto() {
    let copyText = document.getElementById("Respuesta").value;
    navigator.clipboard.writeText(copyText).then(function() {
      alert("¡El texto ha sido copiado al portapapeles!");
    }, function() {
      alert("Error al copiar el texto al portapapeles");
    });
  }