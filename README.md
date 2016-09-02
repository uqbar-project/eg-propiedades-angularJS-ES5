# Sistema de administración de propiedades en Angular

# Pre-requisitos:
- [nodejs + npm](https://nodejs.org/en/download/)
- [bower](https://bower.io/)

# Setup:
- `npm install -g bower`
- `bower install`
- `npm install`
- `npm start` o `node server.js`

---

Para correr la branch `master` solo hace falta `bower install`. 
En las branch que le siguen (**steps**), requieren tanto `bower install` y `npm install` (además del servidor levantado: `npm start` o `node server.js`)

# Enunciado
Para mostrar cómo construir una SPA en Angular elegimos el siguiente dominio:

*“Booking-dds”* es un portal de búsqueda y reserva de estadías en propiedades (hoteles, casas y departamentos particulares). El portal ofrece a dueños de todo el país incluir su propiedad gratuitamente.
En este ejercicio nos enfocaremos en cómo se registran, modifican, listan y dan de baja las propiedades.
También mostraremos un pequeño `dashboard` con el fin de dar un ejemplo de `directiva`.

# Transformaciones paso a paso
- Creación del layout: [step-1](https://github.com/uqbar-project/eg-propiedades-angular/commit/f99b8789ee5e899821aef6a0ca9b242bed762520)
- Directiva cajita: [directiva](https://github.com/uqbar-project/eg-propiedades-angular/commit/75f123a556cf1a295f370e20d9a5150225f11279)
- ABML de propiedades con switch: [switch](https://github.com/uqbar-project/eg-propiedades-angular/commit/d9131c0ad70e95d23b6866a67c7d6e03fbfb9f35)
- Reutilizacion de vista: [una sola vista](https://github.com/uqbar-project/eg-propiedades-angular/commit/a586da721039db3a4d6abf7e4c007f86bbe8fdf6)
- Reemplazo switch por state, agregando vista anidada: [vista anidada](https://github.com/uqbar-project/eg-propiedades-angular/commit/48eb0df000066cfa82d83fb9e84021198e27d4f6)
- Reutilizo controllers: [un solo controller](https://github.com/uqbar-project/eg-propiedades-angular/commit/7ea972899e124d12dd9d609110934210136205d4)
