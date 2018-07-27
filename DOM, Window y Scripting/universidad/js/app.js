const busqueda = document.getElementById('buscador');

busqueda.addEventListener('keypress', obtenerEvento);

function obtenerEvento(e){
  document.querySelector('#encabezado').innerText = busqueda.value;
  console.log(`${e.type}`);
}

// --------------------------------------------------------
// document.body.addEventListener('click', eliminarElemento);
//
// function eliminarElemento(e){
//   e.preventDefault();
//   if (e.target.classList.contains('borrar-curso')) {
//     console.log('borro');
//     e.target.parentElement.parentElement.remove();
//   } if (e.target.classList.contains('agregar-carrito')) {
//     console.log('agrego');
//   }
// }
// ----------------------------------------------------------------------
// let nuevoEl = document.createElement('h1');
// nuevoEl.textContent = 'nuevo titulo';
//
// let anterior = document.querySelector('#encabezado');
// let padre = anterior.parentElement;
//
// padre.replaceChild(nuevoEl, anterior);
// console.log(padre);

// ----------------------------------------------------------
// let hermanos = document.querySelectorAll('.enlace');
//
//
// console.log(hermanos[0].nextElementSibling.nextElementSibling.previousElementSibling);

// ---------------------------------------------------------------------------
// let traversing = document.querySelectorAll('.card');
//
// for(let i in traversing) {
//     console.log(`${i} : ${traversing[i]}`);
// }
//
// console.log(traversing[0].parentElement.parentElement.parentElement.children[0].style.color ='red');

// ----------------------------------------------------------------------------------------

// let enlaces = document.getElementsByClassName('menu')[0].getElementsByTagName('a');
// console.log(enlaces);
// let enlacesArr = Array.from(enlaces);
// console.log(enlacesArr);
//
// enlacesArr.forEach(function(enlace) {
//     console.log(enlace.textContent);
// });
//
// -------------------------------------------------------------------------
//
// let otrosEnlaces = document.querySelectorAll('nav .enlace');
// console.log(otrosEnlaces);
//
// otrosEnlaces.forEach(function(enlace) {
//     console.log(enlace.textContent);
// });
//
// let lala = document.getElementsByTagName('a');
// let lalaarr = Array.from(lala);
// // console.log(enlacesArr);
// lalaarr.forEach(function(enlace) {
//     console.log(enlace.textContent);
// });
//
// console.log(lalaarr);
