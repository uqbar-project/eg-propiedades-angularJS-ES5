function ListadoPropiedadesCtrl(propiedades) {
  var self = this;
  self.propiedades = propiedades;
}

angular.module("booking-app")
.controller("ListadoPropiedadesCtrl", [ "propiedades", function(propiedades) { 
  return new ListadoPropiedadesCtrl(propiedades);
}]);