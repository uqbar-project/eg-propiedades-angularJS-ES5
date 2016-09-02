function ListadoPropiedadesCtrl(propiedades, PropiedadesHome) {
  var self = this;
  self.propiedades = propiedades;

  self.delete = function (propiedadId) {
  	PropiedadesHome.delete(propiedadId)
	};
}

angular.module("booking-app")
.controller("ListadoPropiedadesCtrl", ListadoPropiedadesCtrl);

ListadoPropiedadesCtrl.$inject = [ "propiedades", "PropiedadesHome" ];