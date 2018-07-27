// variables
const presupuestoUsuario = prompt('¿Cual es tu presupuesto semanal?');
let cantidadPresupuesto;


// Classes
class Presupuesto {
  constructor (presupuesto) {
    this.presupuesto = Number(presupuesto);
    this.restante = Number(presupuesto);
  }

  // metodo para ir restando del presupuesto actual
  presupuestoRestante (cantidad = o) {
    return this.restante -= Number(cantidad);
  }
}

// clase de interface que se muestra en el DOM
class Interfaz {
  insertarPresupuesto (cantidad) {
    const presupuestoSpan = document.querySelector('span#total');
    const restanteSpan = document.querySelector('span#restante');

    // mostrar en el DOM
    presupuestoSpan.innerHTML = `${cantidad}`;
    restanteSpan.innerHTML = `${cantidad}`;
  }
}
// EventListeners
document.addEventListener('DOMContentLoaded', function () {
  if (presupuestoUsuario === null || presupuestoUsuario === '') {
    window.location.reload();
  } else {
    // instanciamos presupuesto
    cantidadPresupuesto = new Presupuesto(presupuestoUsuario);
    // instanciar la calse interfaz
    const ui = new Interfaz();
    ui.insertarPresupuesto(cantidadPresupuesto.presupuesto);
  }
});
