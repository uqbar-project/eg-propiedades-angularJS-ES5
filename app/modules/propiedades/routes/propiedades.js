angular.module('booking-app')
.config(function($stateProvider) {
  return $stateProvider
  .state('main.listado_propiedades', {
    url: "/propiedades",
    templateUrl: "app/modules/propiedades/views/list.html",
    controller: "ListadoPropiedadesCtrl",
    controllerAs: "listadoCtrl",
    resolve: {
    	propiedades: function (PropiedadesHome) {
    		return PropiedadesHome.getAll()
    	}
    }
  })
  .state('main.alta_propiedades', {
    url: "/propiedades/crear",
    templateUrl: "app/modules/propiedades/views/create.html",
    controller: "CrearPropiedadCtrl",
    controllerAs: "crearCtrl"
  })
  .state('main.editar_propiedades', {
    url: "/propiedades/editar/:id",
    templateUrl: "app/modules/propiedades/views/edit.html",
    controller: "EditarPropiedadCtrl",
    controllerAs: "editarCtrl",
    resolve: {
      propiedad: function (PropiedadesHome, $stateParams) {
        return PropiedadesHome.get(parseInt($stateParams.id));
      }
    }
  });
});