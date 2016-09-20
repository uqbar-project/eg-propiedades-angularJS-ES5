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
    templateUrl: "app/modules/propiedades/views/form.html",
    controller: "CrearPropiedadCtrl",
    controllerAs: "formCtrl"
  })
  .state('main.alta_propiedades.hotel', {
    views : { "tipo-propiedad": { templateUrl: "app/modules/propiedades/views/hotelForm.html" } }
  })
  .state('main.alta_propiedades.particular', {
    views : { "tipo-propiedad": { templateUrl: "app/modules/propiedades/views/particularForm.html" } }
  })
  .state('main.editar_propiedades', {
    url: "/propiedades/editar/:id",
    templateUrl: "app/modules/propiedades/views/form.html",
    controller: "EditarPropiedadCtrl",
    controllerAs: "formCtrl",
    resolve: {
      propiedad: function (PropiedadesHome, $stateParams) {
        return PropiedadesHome.get(parseInt($stateParams.id));
      }
    }
  })
  .state('main.editar_propiedades.hotel', {
    views : { "tipo-propiedad": { templateUrl: "app/modules/propiedades/views/hotelForm.html" } }
  })
  .state('main.editar_propiedades.particular', {
    views : { "tipo-propiedad": { templateUrl: "app/modules/propiedades/views/particularForm.html" } }
  })
});