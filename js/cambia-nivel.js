function subeNivel() { 
  nivelActual++; 
}


function actualizaNivel() { 
  var nivelTexto = nivelActual + 1; 
  if (nivelTexto < 10) { 
    nivelTexto = "0" + nivelTexto; 
  }
  document.querySelector("#nivel").innerText = nivelTexto; 
}

function cargaNuevoNivel() { 
  subeNivel(); 
  actualizaNivel(); 
  iniciar(); 
}

/** En resumen, estas tres funciones trabajan juntas para gestionar los niveles en un juego o aplicación, incrementando el nivel actual, actualizando la representación visual del nivel y preparando el nuevo nivel para su inicio. Esto es común en juegos donde los jugadores avanzan a través de diferentes niveles a medida que completan desafíos o superan obstáculos. */
