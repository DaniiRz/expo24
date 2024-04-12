 // Obtener la referencia al elemento donde se mostrará la fecha
 var fechaElemento = document.getElementById('fecha');

 // Función para actualizar la fecha en tiempo real
 function actualizarFecha() {
   // Obtener la fecha actual
   var fechaActual = new Date();

   // Formatear la fecha como "DD/MM/AAAA HH:MM:SS"
   var formatoFecha = `${('0' + fechaActual.getDate()).slice(-2)}/${('0' + (fechaActual.getMonth() + 1)).slice(-2)}/${fechaActual.getFullYear()} ${('0' + fechaActual.getHours()).slice(-2)}:${('0' + fechaActual.getMinutes()).slice(-2)}:${('0' + fechaActual.getSeconds()).slice(-2)}`;

   // Actualizar el contenido del elemento con la fecha actual
   fechaElemento.textContent = formatoFecha;
 }

 // Llamar a la función de actualización de fecha cada segundo
 setInterval(actualizarFecha, 1000);

 // Llamar a la función una vez para mostrar la fecha inicial
 actualizarFecha();