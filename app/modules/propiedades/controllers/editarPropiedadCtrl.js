function EditarPropiedadCtrl(PropiedadesHome, propiedad) {
  var self = this;
  self.propiedad = propiedad;
  self.tiposDePropiedad = [{ nombre: "Hotel" }, { nombre: "Particular"}]

  self.guardar = function () {
  	PropiedadesHome.update(self.propiedad);
  }
};

angular.module("booking-app")
.controller("EditarPropiedadCtrl", EditarPropiedadCtrl);

EditarPropiedadCtrl.$inject = [ "PropiedadesHome", "propiedad" ];