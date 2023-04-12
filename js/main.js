
//encriptador de texto
    function encriptar() {
      
        let texto = document.getElementById("texto").value;
        let clave = {
            "a": "enter",
            "e": "imes",
            "i": "ai",
            "o": "ober",
            "u": "ufat"
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
        console.log(textoEncriptado);
    }

  //desencriptador de texto
  function desencriptar() {
    let texto = document.getElementById("texto").value;
    let clave = {
      "enter": "a",
      "imes": "e",
      "ai": "i",
      "ober": "o",
      "ufat": "u"
    }
    let keys = Object.keys(clave);
    let textoDesencriptado = "";
    for (let i= 0; i < texto.length; i++) {
      if (texto.slice(i,i+2)== keys[2]){
        textoDesencriptado += clave.ai;
        i += 1;
      }
      else if (texto.slice(i,i+4)=== keys[3]){
        textoDesencriptado += clave.ober;
        i += 3;
        }
      else if (texto.slice(i,i+4)=== keys[1]){
        textoDesencriptado += clave.imes;
        i += 3;

      }
      else if (texto.slice(i,i+4)=== keys[4]){
        textoDesencriptado += clave.ufat;
        i += 3;

      }

      else if (texto.slice(i,i+5)=== keys[0]){
        textoDesencriptado += clave.enter;
        i += 4;
      }
      else {
        textoDesencriptado += texto[i];
      }
      document.getElementById("Respuesta").value = textoDesencriptado;
    }
    }
//poner el texto encriptado/desencriptador en el textarea


//copiar texto al portapapeles
  function copiarTexto() {
    let copyText = document.getElementById("Respuesta").value;
    navigator.clipboard.writeText(copyText);
  }
