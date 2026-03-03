
document.addEventListener("DOMContentLoaded", function () {

    const menu = document.querySelector(".dropdown-content");

   
    const opciones = document.querySelectorAll(".dropdown-content a");


    const botonTemas = document.querySelector(".dropbtn");

    botonTemas.addEventListener("click", function(e){
        e.preventDefault();

        if(menu.style.display === "block"){
            menu.style.display = "none";
        } else {
            menu.style.display = "block";
        }
    });


    opciones.forEach(function(opcion){
        opcion.addEventListener("click", function(){
            menu.style.display = "none";
        });
    });

}); 

// Botón volver arriba
const btnInicio = document.getElementById("btnInicio");

if(btnInicio){
    btnInicio.addEventListener("click", function(e){
        e.preventDefault();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}