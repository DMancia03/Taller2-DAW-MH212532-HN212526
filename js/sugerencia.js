window.onload = function(){
    var sugerencia = document.getElementById("txtSugerencia");
    var comentario = document.getElementById("comentarios");

    comentario.addEventListener("click" ,function() {
        hiddenComentarios();
    });
    
    window.addEventListener("keydown" , function(e) {
        window.addEventListener("keypress", function(segunda) {
            listenCKey(e.key, segunda.key);
        });
    });
}

function hiddenComentarios() {
    var sugerencia = document.getElementById("txtSugerencia");
    var comentario = document.getElementById("comentarios");

    comentario.className = "hidden";
    sugerencia.className = "txtSugerencia";
}

function hiddenTxt() {
    var sugerencia = document.getElementById("txtSugerencia");
    var comentario = document.getElementById("comentarioSee");
    var mensaje = document.getElementById("mensaje");

    mensaje.innerText = sugerencia.value;

    comentario.className = "comentarios";
    sugerencia.className = "hidden";
}

function listenCKey(pri, seg) {
    console.log(pri + seg);

    if(pri == "Control" && seg == "e"){
        hiddenComentarios();
    }else if(pri == "Control" && seg == "s"){
        hiddenTxt();
    }
}