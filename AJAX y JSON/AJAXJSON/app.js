const boton1 = document.getElementById('boton1');

boton1.addEventListener('click', function () {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'empleado.json', true);
  xhr.onload = function () {
    if (this.status === 200) {
      const personal = JSON.parse(this.responseText);
      const output = `
      <ul>
          <li>ID: ${personal.id}</li>
          <li>Nombre: ${personal.nombre}</li>
          <li>Empresa: ${personal.empresa}</li>
          <li>Trabajo: ${personal.trabajo}</li>
      </ul>
  `;
      document.getElementById('empleado').innerHTML = output;
    }
  };
  xhr.send();
});

const boton2 = document.getElementById('boton2');

boton2.addEventListener('click', function () {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'empleados.json', true);
  xhr.onload = function () {
    if (this.status === 200) {
      const personal = JSON.parse(this.responseText);
      let output = '';
      personal.forEach(function(personal) {
        output += `
        <ul>
            <li>ID: ${personal.id}</li>
            <li>Nombre: ${personal.nombre}</li>
            <li>Empresa: ${personal.empresa}</li>
            <li>Trabajo: ${personal.trabajo}</li>
        </ul>
    `;
      });

      document.getElementById('empleados').innerHTML = output;
    }
  };
  xhr.send();
});
