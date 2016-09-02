(function () {
    'use strict';

    angular.module('booking-app')
    .directive('cajita', cajita);

    function cajita() {
        var cajita = {
            restrict: 'EA',
            templateUrl: 'app/directives/cajita/view/cajita.html',
            scope: {
                detalle: '='
            }
        };
        return cajita;
    }
}());