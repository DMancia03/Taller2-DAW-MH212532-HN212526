window.onload = function(){
    var comentario = document.getElementById("comentarios");

    comentario.addEventListener("click", function() {
        hiddenComentarios();
    });

    comentario.onclick = hiddenComentarios;
    
    document.onkeydown = function(e){
        e = e || event;
        if ( e.ctrlKey && e.keyCode == 'E'.charCodeAt(0) ) {
           hiddenComentarios();
            return false;
        }
        if( e.ctrlKey && e.keyCode == 'S'.charCodeAt(0) ) {
            hiddenTxt();
            return false;
        }
    };
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

    if( sugerencia.value == "" ){
        alert("Escriba algo por favor, apreciado cliente.");
    }else{
        mensaje.innerText = sugerencia.value;

        comentario.className = "comentarios";
        sugerencia.className = "hidden";
    }
}