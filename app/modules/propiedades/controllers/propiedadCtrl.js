function PropiedadCtrl(PropiedadesHome, propiedad, $state, nombreController) {
  var self = this;
  self.propiedad = propiedad;
  self.tiposDePropiedad = [{ nombre: "Hotel" }, { nombre: "Particular" }]

  self.guardar = function () {
  	PropiedadesHome.upsert(self.propiedad);
  };

  self.abrirTipoPropiedad = function () {
  	$state.go("main." + nombreController + "_propiedades." + self.propiedad.tipo.nombre.toLowerCase());
  };
};

angular.module("booking-app")
.controller("PropiedadCtrl", PropiedadCtrl);

PropiedadCtrl.$inject = [ "PropiedadesHome", "propiedad", "$state", "nombreController" ];