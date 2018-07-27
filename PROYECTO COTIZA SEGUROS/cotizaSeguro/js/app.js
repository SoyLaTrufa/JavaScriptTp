// Constructor para Seguro
function Seguro (marca, anio, tipo) {
  this.marca = marca;
  this.anio = anio;
  this.tipo = tipo;
}

Seguro.prototype.cotizarSeguro = function () {
  // 1 = americano 1.15
  // 2 = asiatico 1.05
  // 3 = europeo 1.35
  let cantidad;
  const base = 2000;

  switch (this.marca) {
    case '1':
      cantidad = base * 1.15;
      break;
    case '2':
      cantidad = base * 1.05;
      break;
    case '3':
      cantidad = base * 1.35;
      break;
  }

  // leer el año
  const diferencia = new Date().getFullYear() - this.anio;
  cantidad -= ((diferencia * 3) * cantidad) / 100;

  // seguro basico 30%
  // seguro completo 50%
  if (this.tipo === 'basico') {
    cantidad *= 1.3;
  } else {
    cantidad *= 1.5;
  }
  // console.log(cantidad);
  // console.log(Math.round(cantidad));
  return Math.round(cantidad);
};

function Interfaz () {}
// mensaje en el DOM
Interfaz.prototype.mostrarMensaje = function (mensaje, tipo) {
  const div = document.createElement('div');
  if (tipo === 'error') {
    div.classList.add('mensaje', 'error');
  } else {
    div.classList.add('mensaje', 'correcto');
  }
  div.innerHTML = ` ${mensaje} `;
  formulario.insertBefore(div, document.querySelector('.form-group'));

  setTimeout(function () {
    document.querySelector('.mensaje').remove();

  }, 2500);
};

Interfaz.prototype.mostrarResultado = function (seguro, total) {
  const resultado = document.getElementById('resultado');
  let marca;

  switch (seguro.marca) {
    case '1':
      marca = 'Americano';
      break;
    case '2':
      marca = 'Asiatico';
      break;
    case '3':
      marca = 'Europeo';
      break;
  }
  const div = document.createElement('div');
  div.innerHTML = `
    <p class="header">  Tu resumen: </p>
    <p>  Marca: ${marca} </p>
    <p>  Año: ${seguro.anio} </p>
    <p>  Tipo: ${seguro.tipo} </p>
    <p>  Total: $ ${total} </p>
   `;

  const spinner = document.querySelector('#cargando img');
  spinner.style.display = 'block';

  setTimeout(function () {
    spinner.style.display = 'none';
    resultado.appendChild(div);
  }, 2500);
};

// Event Listeners
const formulario = document.getElementById('cotizar-seguro');

formulario.addEventListener('submit', function (e) {
  e.preventDefault();
  // leer marca seleccionada
  const marca = document.getElementById('marca');
  const marcaSeleccionada = marca.options[marca.selectedIndex].value;

  // leer año seleccionado
  const anio = document.getElementById('anio');
  const anioSeleccionado = anio.options[anio.selectedIndex].value;

  // ller el radio button seleccionado
  const tipo = document.querySelector('input[name="tipo"]:checked').value;

  const interfaz = new Interfaz();

  if (marcaSeleccionada === '' || anioSeleccionado === '' || tipo === '') {
    // mensaje de error
    interfaz.mostrarMensaje('todos los campos son necesarios', 'error');
  } else {

    const resultado = document.querySelector('#resultado div');
    if (resultado != null) {
      resultado.remove();
    }
    // instanciar Seguro
    const seguro = new Seguro(marcaSeleccionada, anioSeleccionado, tipo);
    // cotizar seguro
    const cantidad = seguro.cotizarSeguro();

    interfaz.mostrarResultado(seguro, cantidad);

    interfaz.mostrarMensaje('Cotizando', 'correcto');
  }
});

// SELECT AÑo
const max = new Date().getFullYear();
const min = max - 20;

const selectAnios = document.getElementById('anio');

for (let i = max; i > min; i--) {
  let option = document.createElement('option');
  option.value = i;
  option.innerHTML = i;
  selectAnios.appendChild(option);
}
