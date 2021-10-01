window.onload = Inicio;


function Inicio(){
    //Variable para la caja de comentarios
    var comentario = document.getElementById("comentarios");

    //constante para obener el JSON
    const request = new XMLHttpRequest();
    
    //pedimos abrir el JSON con los menus
    request.open('GET', '../db/combos.json');
    //El tipo de datos que  vamos a obtener
    request.responseType = 'json';
    request.send();
    //función en la cual nos vamos a guiar cuando se termine de leer el JSON
    request.onload =  function() {
        const menu = request.response;
        escogerMenu(menu);
    }

    //PARTE: CAJA DE SUGERENCIAS   ------------------------------------------

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

    //PARTE: CAJA DE SUGERENCIAS   ------------------------------------------
   
    //PARTE DE MENU
    
}

function escogerMenu(menu){
    var inputFinal = document.getElementById('txtFinal');
    var menucart = document.getElementById('menu');
    document.getElementsByName('combos').forEach(e=>{
        e.addEventListener('click', function(){
            //menucart.innerHTML = "";
            var div = document.createElement('div')
            div.className = "comida"
            var nombre = document.createElement('div')
            var a ;
            var precio = menu[e.id]['precio'][0];
            switch(e.id){
                case "comboInfantil":
                    a = "Combo Infantil"
                break;
                case "comboPersonal":
                    a = "Combo Personal"

                break;
                case "superCombo":
                    a = "Super Combo"
                break;
            }
            nombre.innerHTML += `<p class='name'>${a} </p>`
          
            div.appendChild(nombre);
           var menuIn = menu[e.id]['ingredientes']
            for(var index = 0 ; index <= 4; index++){
                if(menuIn[index] == undefined){

                }else{
                    div.innerHTML += `<p>${menuIn[index]}</p>`

                }
            }
            var cuentaactual = 
            menucart.appendChild(div);



        })
    })
}

//FUNCIONES: CAJA DE SUGERENCIAS  --------------------------------------------
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
//FUNCIONES: CAJA DE SUGERENCIAS  --------------------------------------------

//FUNCIONES DEL MENU


function escogerMenu(menu){
    var inputFinal = document.getElementById('txtFinal');
    var menucart = document.getElementById('menu');
    document.getElementsByName('combos').forEach(e=>{
        e.addEventListener('click', function(){
            //menucart.innerHTML = "";
            var div = document.createElement('div')
            div.className = "comida"
            var nombre = document.createElement('div')
            var a ;
            var precio = menu[e.id]['precio'][0];
            switch(e.id){
                case "comboInfantil":
                    a = "Combo Infantil"
                break;
                case "comboPersonal":
                    a = "Combo Personal"

                break;
                case "superCombo":
                    a = "Super Combo"
                break;
            }
            nombre.innerHTML += `<p class='name'>${a} </p>`
          
            div.appendChild(nombre);
           var menuIn = menu[e.id]['ingredientes']
            for(var index = 0 ; index <= 4; index++){
                if(menuIn[index] == undefined){

                }else{
                    div.innerHTML += `<p>${menuIn[index]}</p>`

                }
            }
            var cuentaactual = inputFinal.value;
            var cuenta = parseFloat(cuentaactual)+parseFloat(precio).toFixed(2)
            inputFinal.value = cuenta;
            menucart.appendChild(div);



        })
    })
}