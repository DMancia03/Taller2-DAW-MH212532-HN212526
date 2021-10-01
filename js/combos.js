window.onload= Inicio;
function Inicio(){
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
   
}

function escogerMenu(menu){
    var menucart = document.getElementById('menu');
    document.getElementsByName('combos').forEach(e=>{
        e.addEventListener('click', function(){
            menucart.innerHTML = "";
            var div = document.createElement('div')
            div.className = "comida"
            var nombre = document.createElement('div')
            var a ;
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
            nombre.innerHTML = `<p class='name'>${a} </p>`
          
            div.appendChild(nombre);
            var menuIn = menu[e.id]['ingredientes']
            for(var index = 0 ; index <= 4; index++){
                if(menuIn[index] == undefined){

                }else{
                    div.innerHTML += `<p>${menuIn[index]}</p>`

                }
            }

            menucart.appendChild(div);



        })
    })
}