var propiedadIdActual = 1;

function Propiedad (direccion, localidad, estado, tipo) {
	return { id: propiedadIdActual++, direccion: direccion, localidad: localidad, estado: estado, tipo: tipo };
}

propiedades = [
	new Propiedad("Libertad 1617", "Retiro, Buenos Aires", "Abierto", { nombre: "Hotel", cantidadEstrellas: 3 } ),
	new Propiedad("Bulnes 1905", "Palermo, Buenos Aires", "Refaccionando", { nombre: "Particular", banios: 2, antiguedad: 15 }),
	new Propiedad("Avenida Martinez de Hoz 2071", "Punta Mogotes, Mar del Plata", "Abierto", { nombre: "Particular", banios: 1, antiguedad: 0 }),
	new Propiedad("Avenida Belgrano 1041", "Mendoza", "Abierto", { nombre: "Hotel", cantidadEstrellas: 2 })
];

function PropiedadesHome() {
	var self = this;

	self.getAll = function () {
		return propiedades;
	};
};

angular.module("booking-app")
.factory("PropiedadesHome", function() {
	return new PropiedadesHome();
});