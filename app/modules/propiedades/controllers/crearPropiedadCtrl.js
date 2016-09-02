function CrearPropiedadCtrl(PropiedadesHome) {
  var self = this;
  self.propiedad = {};
  self.tiposDePropiedad = [{ nombre: "Hotel" }, { nombre: "Particular"}]

  self.guardar = function () {
  	PropiedadesHome.create(self.propiedad);
  }
};

angular.module("booking-app")
.controller("CrearPropiedadCtrl", CrearPropiedadCtrl);

CrearPropiedadCtrl.$inject = [ "PropiedadesHome" ];