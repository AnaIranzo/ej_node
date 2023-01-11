const boton = document.createElement("input");
const espacios = document.querySelector(".añadirBoton");
espacios.appendChild(boton);
boton.setAttribute("type", "button");
boton.setAttribute("value", "Haz click");

boton.addEventListener('click', show);

function show() {
    document.querySelector('#img1').style.display = 'flex';
}