document.getElementById('generar-nombre').addEventListener('submit', function (e) {
  e.preventDefault();
  const origen = document.getElementById('origen');
  const origenSlect = origen.options[origen.selectedIndex].value;

  const genero = document.getElementById('genero');
  const generoSlect = genero.options[genero.selectedIndex].value;

  const cantidad = document.getElementById('numero').value;

  let url = 'https://uinames.com/api/?';
  if (origenSlect !== '') {
    url += `region=${origenSlect}&`;
  }
  if (generoSlect !== '') {
    url += `gender=${generoSlect}&`;
  }
  if (cantidad !== '') {
    url += `amount=${cantidad}`;
  }
// FETCH
  fetch(url)
    .then(function (res) {
      return res.json();
    })
    .then(function (nombres) {
      let html = '';
      nombres.forEach(function (nombre) {
        html += `<p>${nombre.name}</p>`;
      });
      document.getElementById('resultado').innerHTML = html;
    });

// AJAX
  // const xhr = new XMLHttpRequest();
  // xhr.open('GET', url, true);
  // xhr.onload = function () {
  //   if (this.status === 200) {
  //     const respuesta = JSON.parse(this.responseText);
  //     let html = '<h2>Lista</h2>';
  //     html += '<ul class="lista">';
  //     respuesta.forEach(function (nombre) {
  //       html += `<li>${nombre.name}</li>`;
  //     });
  //     html += '</ul>';
  //     document.getElementById('resultado').innerHTML = html;
  //   }
  // };
  // xhr.send();
});
