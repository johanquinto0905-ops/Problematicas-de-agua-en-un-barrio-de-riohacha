document.getElementById("formulario").addEventListener("submit", function(e){

    e.preventDefault();

    document.getElementById("mensaje").innerHTML =
    "✅ ¡Gracias! Tu reporte fue enviado correctamente.";

    this.reset();

});

window.addEventListener("scroll", ()=>{

    const header = document.querySelector("header");

    if(window.scrollY > 50){
        header.style.opacity = "0.95";
    }else{
        header.style.opacity = "1";
    }

});