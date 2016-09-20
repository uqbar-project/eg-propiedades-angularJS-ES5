(function () {
  'use strict';

  angular.module('booking-app')
  .controller('DashboardCtrl', DashboardCtrl);

  function DashboardCtrl() {
    var self = this;

    self.Detalle = Detalle;

    self.detalleMensajes = new Detalle(10, '¡Nuevos mensajes!', "comments", "primary");
    self.detalleCampanias = new Detalle(5, '¡Nuevas campañas!', "tasks", "green");
    self.detalleVentas = new Detalle(3, '¡Nuevas ventas!', "shopping-cart", "yellow");
    self.detalleQuejas = new Detalle(3, '¡Nuevas quejas!', "support", "red");

    function Detalle(_cantidad, _mensaje, _icono, _color) { 
      return {
        cantidad: _cantidad,
        mensaje: _mensaje,
        icono: _icono,
        color: _color
      };
    }
  }
}());