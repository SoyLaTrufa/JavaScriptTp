document.getElementById('cargar').addEventListener('click', cargarDatos);

function cargarDatos () {
  let xhr;
  xhr = new XMLHttpRequest();
  xhr.open('GET', 'data.txt', true);
  xhr.onload = function () {
    if (this.status === 200) {
      document.getElementById('listado').innerHTML = `${this.responseText} `;
    }
  };
  xhr.send();
}
