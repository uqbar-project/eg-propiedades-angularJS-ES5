function EditarPropiedadCtrl(PropiedadesHome, propiedad, $state) {
  var self = this;
  self.propiedad = propiedad;
  self.tiposDePropiedad = [{ nombre: "Hotel" }, { nombre: "Particular"}]

  self.guardar = function () {
  	PropiedadesHome.update(self.propiedad);
  };

  self.abrirTipoPropiedad = function () {
  	$state.go("main.editar_propiedades." + self.propiedad.tipo.nombre.toLowerCase());
  };
};

angular.module("booking-app")
.controller("EditarPropiedadCtrl", EditarPropiedadCtrl);

EditarPropiedadCtrl.$inject = [ "PropiedadesHome", "propiedad", "$state" ];