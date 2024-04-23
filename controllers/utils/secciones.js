// Constantes para completar las rutas de la API.
const PRODUCTO_API = 'services/admin/producto.php';
const CATEGORIA_API = 'services/admin/categoria.php';
// Constante para establecer el formulario de buscar.
const SEARCH_FORM = document.getElementById('searchForm');
// Constantes para establecer el contenido de la tabla.
const TABLE_BODY = document.getElementById('tableBody'),
    ROWS_FOUND = document.getElementById('rowsFound');
// Constantes para establecer los elementos del componente Modal.
const SAVE_MODAL = new bootstrap.Modal('#saveModal'),
    MODAL_TITLE = document.getElementById('modalTitle');
// Constantes para establecer los elementos del formulario de guardar.
const SAVE_FORM = document.getElementById('saveForm'),
    ID_PRODUCTO = document.getElementById('idProducto'),
    NOMBRE_MARCA_PRODUCTO = document.getElementById('nombreProducto'),
    DESCRIPCION_PRODUCTO = document.getElementById('descripcionProducto'),
    PRECIO_PRODUCTO = document.getElementById('precioProducto');

// Método del evento para cuando el documento ha cargado.
document.addEventListener('DOMContentLoaded', () => {
    // Llamada a la función para mostrar el encabezado y pie del documento.
    loadTemplate();
    // Se establece el título del contenido principal.
    MAIN_TITLE.textContent = 'Gestionar productos';
    // Llamada a la función para llenar la tabla con los registros existentes.
    fillTable();
});

// Método del evento para cuando se envía el formulario de buscar.
SEARCH_FORM.addEventListener('submit', (event) => {
    // Se evita recargar la página web después de enviar el formulario.
    event.preventDefault();
    // Constante tipo objeto con los datos del formulario.
    const FORM = new FormData(SEARCH_FORM);
    // Llamada a la función para llenar la tabla con los resultados de la búsqueda.
    fillTable(FORM);
});

// Método del evento para cuando se envía el formulario de guardar.
SAVE_FORM.addEventListener('submit', async (event) => {
    // Se evita recargar la página web después de enviar el formulario.
    event.preventDefault();
    // Se verifica la acción a realizar.
    (ID_PRODUCTO.value) ? action = 'updateRow' : action = 'createRow';
    // Constante tipo objeto con los datos del formulario.
    const FORM = new FormData(SAVE_FORM);
    // Petición para guardar los datos del formulario.
    const DATA = await fetchData(PRODUCTO_API, action, FORM);
    // Se comprueba si la respuesta es satisfactoria, de lo contrario se muestra un mensaje con la excepción.
    if (DATA.status) {
        // Se cierra la caja de diálogo.
        SAVE_MODAL.hide();
        // Se muestra un mensaje de éxito.
        sweetAlert(1, DATA.message, true);
        // Se carga nuevamente la tabla para visualizar los cambios.
        fillTable();
    } else {
        sweetAlert(2, DATA.error, false);
    }
});

/*
*   Función asíncrona para llenar la tabla con los registros disponibles.
*   Parámetros: form (objeto opcional con los datos de búsqueda).
*   Retorno: ninguno.
*/
const fillTable = async (form = null) => {
    // Se inicializa el contenido de la tabla.
    ROWS_FOUND.textContent = '';
    TABLE_BODY.innerHTML = '';
    // Se verifica la acción a realizar.
    (form) ? action = 'searchRows' : action = 'readAll';
    // Petición para obtener los registros disponibles.
    const DATA = await fetchData(PRODUCTO_API, action, form);
    // Se comprueba si la respuesta es satisfactoria, de lo contrario se muestra un mensaje con la excepción.
    if (DATA.status) {
        // Se recorre el conjunto de registros (dataset) fila por fila a través del objeto row.
        DATA.dataset.forEach(row => {
            // Se establece un icono para el estado del producto.
            (row.estado_producto) ? icon = 'bi bi-eye-fill' : icon = 'bi bi-eye-slash-fill';
            // Se crean y concatenan las filas de la tabla con los datos de cada registro.
            TABLE_BODY.innerHTML += `
                <tr>
                    <td><img src="${SERVER_URL}images/productos/${row.imagen_producto}" height="50"></td>
                    <td>${row.nombre_producto}</td>
                    <td>${row.descripcion_producto}</td>
                    <td>${row.precio_producto}</td>
                    <td><i class="${icon}"></i></td>
                    <td>
                        <button type="button" class="btn btn-info" onclick="openUpdate(${row.id_producto})">
                            <i class="bi bi-pencil-fill"></i>
                        </button>
                        <button type="button" class="btn btn-danger" onclick="openDelete(${row.id_producto})">
                            <i class="bi bi-trash-fill"></i>
                        </button>
                    </td>
                </tr>`;
        });
        // Se muestra un mensaje de acuerdo con el resultado.
        ROWS_FOUND.textContent = DATA.message;
    } else {
        sweetAlert(4, DATA.error, true);
    }
}

/*
*   Función para preparar el formulario al momento de insertar un registro.
*   Parámetros: ninguno.
*   Retorno: ninguno.
*/
const openCreate = () => {
    // Se muestra la caja de diálogo con su título.
    SAVE_MODAL.show();
    MODAL_TITLE.textContent = 'Crear producto';
    // Se prepara el formulario.
    SAVE_FORM.reset();
    EXISTENCIAS_PRODUCTO.disabled = false;
    fillSelect(CATEGORIA_API, 'readAll', 'categoriaProducto');
}


function openUpdate() {
    var myModal = new bootstrap.Modal(document.getElementById('editaradministrador'));
    myModal.show();
}
function editaralumno() {
    var myModal = new bootstrap.Modal(document.getElementById('editaralumno'));
    myModal.show();
}
function editarprofesores() {
    var myModal = new bootstrap.Modal(document.getElementById('editarprofesores'));
    myModal.show();
}
function editarroles() {
    var myModal = new bootstrap.Modal(document.getElementById('editarroles'));
    myModal.show();
}
function editarestado() {
    var myModal = new bootstrap.Modal(document.getElementById('editarestado'));
    myModal.show();
}
function editarcursos() {
    var myModal = new bootstrap.Modal(document.getElementById('editarcursos'));
    myModal.show();
}
function editarseccion() {
    var myModal = new bootstrap.Modal(document.getElementById('editarseccion'));
    myModal.show();
}
function editarespecialidad() {
    var myModal = new bootstrap.Modal(document.getElementById('editarespecialidad'));
    myModal.show();
}



function alerta(){
    Swal.fire({
        title: "¡Exito!",
        text: "¡Felicidades!",
        icon: "success"
      });
}

function alertaeliminar(){
    Swal.fire({
        title: "¿Estas seguro?",
        text: "Al hacer esto eliminaras el registro",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Eliminar"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "¡Eliminado!",
            text: "Has borrado el registro con exito.",
            icon: "success"
          });
        }
      });
} 
