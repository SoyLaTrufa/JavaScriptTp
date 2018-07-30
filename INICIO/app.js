// PROMISES()
const descuento = new Promise(function (resolve, reject) {
  let desAplicado = false;
  if (desAplicado) {
    resolve('si hay descuento');
  } else {
    reject('no hay descuento');
  }
});

descuento.then(function (mensaje) {
  console.log(mensaje);
}).catch(function (error) {
  console.log(error);
});
// const esperando = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve('se resolvió');
//   }, 3000);
// });
//
// esperando.then(function (mensaje) {
//   console.log(mensaje);
// });
// callbacks
// const paises = ['España', 'Portugal', 'Inglaterra', 'Islandia', 'Suiza'];
//
// function mostrarPaises () {
//   setTimeout(function(){
//     let html = '';
//     paises.forEach(function (pais) {
//       html += `<p>${pais}</p>`;
//     });
//     document.getElementById('app').innerHTML = html;
//   }, 1000);
// }
//
//
// function nuevoPais (pais, callback) {
//   setTimeout(function () {
//     paises.push(pais);
//     callback();
//   }, 2000);
//   console.log(pais);
// }
//
// mostrarPaises();
// nuevoPais('China', mostrarPaises);
// let ciudades = ['Tokio', 'Viena', 'Madrid', 'Rio Janeiro', 'Londres'];
//
// ciudades.forEach(function (ciudad) {
//   console.log(ciudad);
// });
//
// function callback (ciudad) {
//   console.log(ciudad);
// }
//
// ciudades.forEach(callback);
// -------------------------------------------------
// CALSES
// class Cliente {
//   constructor (nombre, saldo, apellido) {
//     this.nombre = nombre;
//     this.saldo = saldo;
//     this.apellido = apellido;
//   }
//
//   imprimirSaldo () {
//     return ` hola ${this.nombre} tu saldo es de ${this.saldo} `;
//   }
//   static Bienenida (nombre) {
//     return `hola ${nombre}, bienvenido al cajero`
//   }
// }
//
// class Empresa extends Cliente {
//   constructor (nombre, saldo, tel, tipo) {
//     super(nombre, saldo);
//     this.tel = tel;
//     this.tipo = tipo;
//   }
//   static Bienenida (nombre) {
//     return `hola ${nombre}, bienvenido a la empresa`
//   }
// }
//
// let maria = new Cliente('maria', 'lopez', 900);
// let empresa1 = new Empresa('Udemy', 500000, 156787654, 'Educacion');
// console.log(empresa1.imprimirSaldo());
// console.log(Empresa.Bienenida('lalal'));
//
// console.log(Cliente.Bienenida('sdfsdf'));
// console.log(maria.imprimirSaldo());

// heredar prototypes
// function Cliente (nombre, saldo) {
//   this.nombre = nombre;
//   this.saldo = saldo;
// }
//
// Cliente.prototype.nombreClienteSaldo = function () {
//   return `nombre: ${this.nombre}, tu saldo es : ${this.saldo} `;
// };
//
// Cliente.prototype.nombreClienteSalda = function () {
//   return `nombre: ${this.nombre}, gil : ${this.saldo} `;
// };
//
// const persona = new Cliente('Pedro', 600);
// console.log(persona);
//
// function Empresa (nombre, saldo, numero, tipo) {
//   Cliente.call(this, nombre, saldo);
//   this.numero = numero;
//   this.tipo = tipo;
// }
// // una forma de crear un objeto
// Empresa.prototype = Object.create(Cliente.prototype);
// // Empresa.prototype = {
// //   nombreClienteSaldo: Cliente.prototype.nombreClienteSaldo
// // };
// const empresa = new Empresa('Udemy', 900, 15646577, 'educacion');
// console.log(empresa);

// otra forma de crear n objeto
// const empresa = Object.create(Empresa);
// empresa.nombre = 'Udemy';
// empresa.saldo = 10000;
// empresa.numero = 113456789;
// empresa.tipo = 'educacion';
// console.log(empresa);
// --------------------------------------------------------------------
// OBJECT
// function Cliente (nombre, saldo) {
//   this.nombre = nombre;
//   this.saldo = saldo;
// }
//
// Cliente.prototype.tipoCliente = function () {
//   let tipo;
//   if (this.saldo > 2000) {
//     tipo = 'gold';
//   } else if (this.saldo > 500) {
//     tipo = 'Platinum';
//   } else {
//     tipo = 'business';
//   }
//   return tipo;
// };
//
// Cliente.prototype.nombreClienteSaldo = function () {
//   return `nombre: ${this.nombre}, saldo: ${this.saldo}, tipo: ${this.tipoCliente()} `;
// };
//
// Cliente.prototype.retiraSaldo = function (retiro) {
//   return this.saldo -= retiro
// };
//
// const persona = new Cliente('Pedro', 600);
// const persona2 = new Cliente('Pedro', 2200);
// //
// persona.retiraSaldo(200);
// persona2.retiraSaldo(1500);
//
// console.log(persona);
// console.log(persona2.nombreClienteSaldo());
// ----------------------------------------------------------------------------
// OBJECT LITERAL
// const cliente = {
//     nombre: 'Juan',
//     saldo: 200,
//     tipoCliente: function(){
//       let tipo;
//           if (this.saldo > 2000) {
//             tipo = 'goold';
//           }else {
//             tipo = 'business'
//           }
//           return tipo;
//     }
// }
//
// console.log(cliente.tipoCliente());
