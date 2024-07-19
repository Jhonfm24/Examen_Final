// Seleccionar los elementos del DOM.
const departamentos = [
    { imagen: 'img/EdificioP.jpg'},{ imagen: 'img/Int1.jpg'},{ imagen: 'img/Int2.jpg'},{ imagen: 'img/Int3.jpg'},{ imagen: 'img/Int4.jpg'},
    { imagen: 'img/Int5.jpg'},{ imagen: 'img/Int6.jpg'},{ imagen: 'img/Int7.jpg'},{ imagen: 'img/Int8.jpg'},{ imagen: 'img/Int9.jpg'}];

// Indicador del proyecto
let Indicador = 0;
// Creamos la función
function Proyecto() {
    const imagenElement=document.getElementById('imagen');
    const botonesElement=document.getElementById('botones');
    const infcontenedorElement=document.getElementById('infcontenedor');
    imagenElement.src=departamentos[Indicador].imagen;
    botonesElement.textContent=departamentos[Indicador].botones;
//Aplicamos las condiciones
    if (Indicador === departamentos.length-1) {
        infcontenedorElement.style.display='block';
    } else {
        infcontenedorElement.style.display='none';
    }
}
//Función de los botones
function siguiente() {
    Indicador=(Indicador+1) % departamentos.length;
    Proyecto();
}
function atras() {
    Indicador=(Indicador-1+departamentos.length) % departamentos.length;
    Proyecto();
}
// Iniciar con el proyecto
Proyecto();