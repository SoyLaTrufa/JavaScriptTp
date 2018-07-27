// Variables
const carrito = document.getElementById('carrito');
const cursos = document.getElementById('lista-cursos');
const listaCursos = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');
// Listeners
cargarEventListeners();
function cargarEventListeners(){
 // dispara cuando se presiona agregar carrito
 cursos.addEventListener('click', comprarCurso);
 // cuando se elimina un curso del carrito
 carrito.addEventListener('click', eliminarCurso);
 // Al vaciar el acrrito
 vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
 // Contenido cargado cursos de LS
 document.addEventListener('DOMContentLoaded', leerLocalStorage);
}
// Funciones
// funcion que añade el curso al carrito
function comprarCurso(e){
 // Delegation para agregar carrito
 if(e.target.classList.contains('agregar-carrito')){
 e.preventDefault();
 // console.log('Si');
 // Enviamos el curso seleccionado para tomar sus datos
 const curso = e.target.parentElement.parentElement;
 curso.querySelector('a').textContent = 'Ir a la cesta';
 curso.querySelector('a').classList.remove('agregar-carrito');
 curso.querySelector('a').classList.add('cesta');
 curso.querySelector('a').setAttribute('href', 'carrito.html');
 leerDatosCurso(curso);
 }
}
// Lee los datos del curso
function leerDatosCurso(curso) {
 const infoCurso = {
 imagen: curso.querySelector('img').src,
 titulo: curso.querySelector('h4').textContent,
 precio: curso.querySelector('.precio span').textContent,
 id: curso.querySelector('a').getAttribute('data-id')
 }
 guardarCursoLocalStorage(infoCurso);
}
// Muestra el curso seleccionado en el carrito (alomejor sale sobrando)
// function insertarCarrito(curso) {
// const row = document.createElement('tr');
// row.innerHTML = `
// <td>
// <img src="${curso.imagen}" width="100">
// </td>
// <td>${curso.titulo}</td>
// <td>${curso.precio}</td>
// <td>
// <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
// </td>
// `;
// listaCursos.appendChild(row);
// guardarCursoLocalStorage(curso);
// }
// elimina el curso del carrito en el DOM
function eliminarCurso(e) {
 e.preventDefault();
 let curso, cursoId;
 if (e.target.classList.contains('borrar-curso')) {
 e.target.parentElement.parentElement.remove();
 curso = e.target.parentElement.parentElement;
 cursoId = curso.querySelector('a').getAttribute('data-id');
 // console.log(cursoId);
 }
 eliminarCursoLocalStorage(cursoId);
}
// Elimina los cursos del carrito en el DOM
function vaciarCarrito() {
 // forma lenta
 // listaCursos.innerHTML = '';
 // forma rapida (recomendada)
 while (listaCursos.firstChild) {
 listaCursos.removeChild(listaCursos.firstChild);
 }
 vaciarLocalStorage();
 return false;
 // vaciar localstorage
}
function guardarCursoLocalStorage(curso){
 // console.log(curso);
 let cursos;
 // Toma el valor de un arreglo con datos de LS o vacio
 cursos = obtenerCursosLocalStorage();
 // el curso seleccionada se agrega al arreglos
 cursos.push(curso);
 localStorage.setItem('cursos',JSON.stringify(cursos));
 leerLocalStorage();
}
// Comprueba que haya elementos en local storage
function obtenerCursosLocalStorage(){
 let cursosLS;
 // comprobamos si hay algo en local storage
 if (localStorage.getItem('cursos') === null) {
 cursosLS = [];
 }else{
 cursosLS = JSON.parse(localStorage.getItem('cursos'));
 }
 return cursosLS;
}
// Imprime los cursos de local storage en el carrito
function leerLocalStorage() {
 let cursosLS;
 let total=0;
 cursosLS = obtenerCursosLocalStorage();
 // vaciamos el carrito para llenarlo de nuevo
 if (cursosLS.length) {
 while (listaCursos.firstChild) {
 listaCursos.removeChild(listaCursos.firstChild);
 }
 // console.log(cursosLS);
 cursosLS.forEach(curso => {
 // construir el template
 let btnAgregarProd = document.querySelector('.card a[data-id="'+ curso.id +'"]');
 btnAgregarProd.textContent = 'Ir a la cesta';
 btnAgregarProd.classList.remove('agregar-carrito');
 btnAgregarProd.classList.add('cesta');
 btnAgregarProd.setAttribute('href','carrito.html');
 const row = document.createElement('tr');
 row.innerHTML = `
 <td>
 <img src="${curso.imagen}" width="100">
 </td>
 <td>${curso.titulo}</td>
 <td>${curso.precio}</td>
 <td>
 <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
 </td>
 `;
 total = total + parseFloat(curso.precio.substring(1));
 listaCursos.appendChild(row);
 });
 const monto = document.createElement('p');
 const amount = document.createElement('strong');
 monto.textContent = 'Total: $';
 amount.textContent = total;
 monto.append(amount);
 if (total > 0) {
 carrito.querySelector('p').remove();
 carrito.insertBefore(monto, vaciarCarritoBtn);
 }
 // console.log(monto);
 }else{
 total =0;
 carrito.querySelector('p').setAttribute('hidden','hidden');
 }
}
// elimina el curso por el ID en local storage
function eliminarCursoLocalStorage(id_curso) {
 let cursosLS;
 // Obtenemos el arreglo de cursos
 cursosLS = obtenerCursosLocalStorage();
 // Iteramos y comparamos el ID del curso borrado con los del LS
 cursosLS.forEach((curso, i) => {
 if (curso.id === id_curso) {
 let btnAgregarProd = document.querySelector('.card a[data-id="'+ id_curso +'"]');
 btnAgregarProd.textContent = 'Agregar al carrito';
 btnAgregarProd.classList.add('agregar-carrito');
 btnAgregarProd.classList.remove('cesta');
 btnAgregarProd.setAttribute('href', '#');
 cursosLS.splice(i,1);
 }
 });
 // añadimos el arreglo actual a local storage
 localStorage.setItem('cursos', JSON.stringify(cursosLS));
 leerLocalStorage();
}
// elimina todos lo cursos de local storage
function vaciarLocalStorage() {
 // localStorage.clear(); //borra todo lo que hay en local storage
 localStorage.setItem('cursos', '[]'); //solo borra los que tiene la clave cursos
 let btns = document.querySelectorAll('.card a.cesta');

 for (let i = 0; i < btns.length; i++) {
 btns[i].textContent = 'Agregar al carrito';
 btns[i].classList.add('agregar-carrito');
 btns[i].classList.remove('cesta');
 btns[i].setAttribute('href', '#');
 }
}
