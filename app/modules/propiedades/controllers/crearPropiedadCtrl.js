function CrearPropiedadCtrl(PropiedadesHome, $state) {
  var self = this;
  self.propiedad = {};
  self.tiposDePropiedad = [{ nombre: "Hotel" }, { nombre: "Particular"}]

  self.guardar = function () {
  	PropiedadesHome.create(self.propiedad);
  };

  self.abrirTipoPropiedad = function () {
  	$state.go("main.alta_propiedades." + self.propiedad.tipo.nombre.toLowerCase());
  };
};

angular.module("booking-app")
.controller("CrearPropiedadCtrl", CrearPropiedadCtrl);

CrearPropiedadCtrl.$inject = [ "PropiedadesHome", "$state" ];