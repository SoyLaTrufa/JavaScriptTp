document.getElementById('txtBtn').addEventListener('click', function() {
  fetch('data.txt')
    .then(function (res) {
      return res.text();
    })
    .then(function (data) {
      document.getElementById('resultado').innerHTML = data;
    })
    .catch(function (error) {
      console.log(error);
    });
});

document.getElementById('jsonBtn').addEventListener('click', function() {
  fetch('empleados.json')
    .then(function (res) {
      return res.json();
      // console.log(res.json());
    })
    .then(function (data) {
      let nombres = '';
      data.forEach(function (elem) {
        nombres += `<p>${elem.nombre}, es ${elem.puesto}</p> `;
        document.getElementById('resultado').innerHTML = nombres;
      });
    })
    // .catch(function (error) {
    //   console.log(error);
    // });
});

document.getElementById('apiBTN').addEventListener('click', function() {
  fetch('http://picsum.photos/list')
    .then(function (res) {
      return res.json();
    })
    .then(function (imagenes) {
      let autores = '';
      imagenes.forEach(function (imagen) {
        autores += `<p>${imagen.author} : <a href="${imagen.post_url}">${imagen.post_url}</a></p>`;
      });
      document.getElementById('resultado').innerHTML = autores;
    })
    .catch(function (error) {
      console.log(error);
    });
});
