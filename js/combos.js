//Objeto JSON ----------------------------------------------------
//Sirven de almacenamiento para los productos

//Combos
const combosDB = {
    "superCombo" : {
        "ingredientes" : [
            "3 piezas de pollo", "Ensalada", "Papa frita", "Bebida grande"
        ],
        "precio" : "7.25"
    },
    "comboPersonal" : {
        "ingredientes" : [
            "2 piezas de pollo", "Papa frita", "Bebida mediana"
        ],
        "precio" : "5.75"
    },
    "comboInfantil" : {
        "ingredientes" : [
            "1 pieza de pollo", "Papa frita", "Bebida pequeña"
        ],
        "precio" : "3.50"
    }
}

//Productos
const productos = {
    "acompañante1" : {
        "nombre" : "Ensalada",
        "precio" : "1.50"
    },
    "acompañante2" : {
        "nombre" : "Papa frita",
        "precio" : "1.25"
    },
    "pollo1" : {
        "nombre" : "Pieza de pollo grande",
        "precio" : "1.75"
    },
    "pollo2" : {
        "nombre" : "Pieza de pollo mediana",
        "precio" : "1.50"
    },
    "pollo3" : {
        "nombre" : "Pieza de pollo pequeña",
        "precio" : "1.25"
    },
    "bebida1" : {
        "nombre" : "Bebida grande",
        "precio" : "1.50"
    },
    "bebida2" : {
        "nombre" : "Bebida mediana",
        "precio" : "1.25"
    },
    "bebida3" : {
        "nombre" : "Bebida pequeña",
        "precio" : "1.00"
    },
    "bebida4" : {
        "nombre" : "Café 0.50",
        "precio" : "1.50"
    },
    "postre" : {
        "nombre" : "Postre",
        "precio" : "1.25"
    }
}
//Objeto JSON ----------------------------------------------------

var total = 0;

//Cargamos nuestro inicio
window.onload = Inicio;

var comboanterior;

//Funcion main
function Inicio(){
    //Variable para la caja de comentarios
    var comentario = document.getElementById("comentarios");

    //constante para obener el JSON
    const request = new XMLHttpRequest();
    
    //pedimos abrir el JSON con los menus
    /*request.open('GET', '/js/combosDB.json');
    //El tipo de datos que  vamos a obtener
    request.responseType = 'json';
    request.send();
    //función en la cual nos vamos a guiar cuando se termine de leer el JSON
    request.onload =  function() {
        const menu = request.response;
        escogerMenu(menu);
    }*/
    escogerMenu(combosDB);


   /* request.open('GET', '../db/productos.json');
    //El tipo de datos que  vamos a obtener
    request.responseType = 'json';
    request.send();
    //función en la cual nos vamos a guiar cuando se termine de leer el JSON
    request.onload =  function() {
        const productos = request.response;
        escogerProducto(productos);
    }*/

    //Pasamos nuestro productos json a la funcion menu
    escogerProducto(productos);

    //PARTE: CAJA DE SUGERENCIAS   ------------------------------------------

    //Agregamos el evento click a la caja de comentarios para que puedan agregar un comentario
    comentario.addEventListener("click", function() {
        hiddenComentarios();
    });
    
    //Agregamos el  evento keydown para que puedan agregar un comentario o guardarlo
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
function   escogerProducto(productos){
    var inputFinal = document.getElementById('txtFinal');
    var menucart = document.getElementById('demas');
    document.getElementsByName('otros').forEach(e=>{
        e.addEventListener('click', function(){
            var cuentaactual = parseFloat(inputFinal.value)
            var div = document.createElement('div')
            div.className = "comida"
            div.id = e.id + "_box"
            var nombre = document.createElement('div')
            var a ;
         
            var precio = parseFloat(productos[e.id]['precio']);
            nombre.innerHTML += `<p class='name'>${productos[e.id]['nombre']} </p>`
          
            div.appendChild(nombre);
            var cantidad = document.createElement('input')
            cantidad.type = 'number'
            cantidad.value  ="1"
            cantidad.id = e.id + "_number"
            div.appendChild(cantidad)

            var inputHidden = document.createElement('input')
            inputHidden.type = 'hidden';
            inputHidden.value = productos[e.id]['precio'];
            inputHidden.id = e.id + "_hd"
            div.appendChild(inputHidden)
            menucart.appendChild(div);
            total = cuentaactual+precio
            inputFinal.value = total; 

            document.getElementById(e.id + "_number").onchange = function(){
                if(this.value == 0){
                    div = null
                }else{
                    var cantidad = this.value; 
                    var precio = document.getElementById(e.id + "_hd").value
                    total-=precio
                    total += cantidad*precio;
                    inputFinal.value = total; 
                }
            }
        })
    })
}
function escogerMenu(menu){
    var inputFinal = document.getElementById('txtFinal');
    var menucart = document.getElementById('menu');
    document.getElementsByName('combos').forEach(e=>{
        e.addEventListener('click', function(){
            var cuentaactual = parseFloat(inputFinal.value)
            if(comboanterior!=undefined){
                var menos =  parseFloat( menu[comboanterior]['precio']);
                total = cuentaactual-menos
               
                inputFinal.value = total;
            }
            menucart.innerHTML = "";
            var div = document.createElement('div')
            div.className = "comida"
            var nombre = document.createElement('div')
            var a ;
         
            var precio = parseFloat(menu[e.id]['precio']);
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
            total += precio;
            menucart.appendChild(div);
            inputFinal.value = total
            comboanterior = e.id;
        })
    })
}

//FUNCIONES: CAJA DE SUGERENCIAS  --------------------------------------------

//Se usa para ocultar la caja que invita a comentar para que aparezca el txtarea
function hiddenComentarios() {
    var sugerencia = document.getElementById("txtSugerencia");
    var comentario = document.getElementById("comentarios");

    if( comentario.className != "hidden" ){
        comentario.className = "hidden";
        sugerencia.className = "txtSugerencia";
    }
}

//Se usa para ocultar el txtarea y mostrar todos los comentarios hechos, o uno
function hiddenTxt() {
    var sugerencia = document.getElementById("txtSugerencia");
    var comentario = document.getElementById("comentarioSee");
    var mensaje = document.getElementById("mensaje");

    //Validamos que no este vacio el textarea
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
