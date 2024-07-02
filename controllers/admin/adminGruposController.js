//Obtenemos la conexion al servicio
const GRUPO_API = document.getElementById('services/grupoService.php');
//Definimos nuestras variables con las cuales trabajaremos
//Capturamos los id's de nustra tabla 
const TABLA_GRUPO = document.getElementById('tablaGrupo'),
    ROWS_FOUND = document.getElementById('rowsFoundGrupo');
// Constante para el modal de registro de producto.
const SAVE_MODAL_GRUPO = new bootstrap.Modal('#modalAgregarGrupo'),
    MODAL_TITLE_GRUPO = document.getElementById('modalTitleGrupo');
//Variable para capturar el formulario
const SAVE_FORM = document.getElementById('formGrupo'),
    ID_GRUPO = document.getElementById('idGrupo'),
    NOMBRE_GRUPO = document.getElementById('nombreGrupo');

// Método del evento para cuando el documento ha cargado.
document.addEventListener('DOMContentLoaded', () => {
    // Llamada a la función para llenar la tabla con los registros existentes.
    fillTable();
});


/*
*   Función asíncrona para llenar la tabla con los registros disponibles.
*   Parámetros: form (objeto opcional con los datos de búsqueda).
*   Retorno: ninguno.
*/
const fillTable = async (form = null) => {
    // Se inicializa el contenido de la tabla.
    ROWS_FOUND.textContent = '';
    TABLA_GRUPO.innerHTML = '';
    // Se verifica la acción a realizar.
    (form) ? action = 'searchRows' : action = 'readAll';
    // Petición para obtener los registros disponibles.
    const DATA = await fetchData(GRUPO_API, action, form);
    // Se comprueba si la respuesta es satisfactoria, de lo contrario se muestra un mensaje con la excepción.
    if (DATA.status) {
        // Se recorre el conjunto de registros fila por fila.
        DATA.dataset.forEach(row => {
            // Se crean y concatenan las filas de la tabla con los datos de cada registro.
            //se agrego la fila del boton de detalle producto, que abre un nuevo forms 
            TABLA_GRUPO.innerHTML += `
            <tr>
            <th scope="row" class="text-center">${row.nombre_producto}</th>
            <th>
                <div class="d-flex justify-content-center">
                    <button type="button" class="boton-redondo btn-p" onclick="editargrupo()">
                        <i class="bi bi-pencil"></i>
                    </button>
                    <button type="button" class="boton-redondo btn-p" onclick="alertaeliminar()">
                        <i class="bi bi-trash-fill"></i>
                </div>
                </button>
            </th>
        </tr>
            `;
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
    SAVE_MODAL_GRUPO.show();
    MODAL_TITLE_GRUPO.textContent = 'AGREGAR GRUPO';
    SAVE_FORM.reset();
}


