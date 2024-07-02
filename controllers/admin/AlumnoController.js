//constante para completar ruta de API. 
const ESTUDIANTE_API = 'services/estudianteService.php';
const ESPECIALIDAD_API = 'services/especialidadService.php';
const CURSO_API = 'services/cursoService.php';
//Constante para establecer el formulartio de busqueda 
const SEARCH_FORM = document.getElementById('searchForm');
//Constante para establecer elementos de la tabla
const TABLE_BODY = document.getElementById('tableBody'),
    ROWS_FOUND = document.getElementById('rowsFound');
//Constante para establecer los elementos del modal de agregarEstudiante 
const MODAL_AGREGAR = new bootstrap.Modal('#AgregarEstudiante'),
    AGREGAR_TITLE = document.getElementById('modalTitle');
//constantes para establecer los datos del formulario guardar
const FORM_SAVE = document.getElementById('saveForm'),
    ID_ESTUDIANTE = document.getElementById('idEstudiante'),
    NOMBRE_ESTUDIANTE = document.getElementById('nombreEstudiante'),
    ESPECIALIDAD_ESTUDIANTE = document.getElementById('especialidadEstudiante'),
    CARNET_ESTUDIANTE = document.getElementById('carnetEstudiante'),
    CORREO_ESTUDIANTE = document.getElementById('correoEstudiante'),
    CURSO_ESTUDIANTE = document.getElementById('cursoEstudiante'),
    CLAVE_ESTUDIANTE = document.getElementById('claveEstudiante'),
    CONFIRMAR_CLAVE = document.getElementById('confirmarClave');

//metodo del elemento cuando el doc ha cargado 
document.addEventListener('DOMContentLoaded', () => {
    //se llama a la funcion "FILLTABLE" para llenar la tabla con los registros que existan 
    fillTable();
});

//Metodos para el evento de buscar en el formulario de estudiante 
SEARCH_FORM.addEventListener('submit', (event) => {
    //se eveita que se recargue la pagina 
    event.preventDefault();
    //constante tipo objeto con los datos del formulario de busqueda 
    const FORM = new FormData(SEARCH_FORM);
    fillTable();  //funcion para llenar tabla segun la busqueda de estudiantes 
});


//metodo con el evento de guardar del formulario 
FORM_SAVE.addEventListener('submit', async (event) => {
    //se eveita que se recargue la pagina 
    event.preventDefault();
    //Verifificar la accion a realizar
    (ID_ESTUDIANTE.value) ? action = 'updateRow' : action = 'createRow';
    //constante tipo objeto con datos del forms 
    const FORM = new FormData(FORM_SAVE);
    //se hace la peticion para guadar los datos ingresados en el formulario 
    const DATA = await fetchData(ESTUDIANTE_API, action, FORM);
    //si la respuesta es verdadera, de lo contrario se envia un excepcion 
    if (DATA.status) {
        //se cierra el modal 
        MODAL_AGREGAR.hide();
        sweetAlert(1, DATA.message, true);
        //se recarga la tabla para ver los cambios 
        fillTable();
    } else {
        sweetAlert(2, DATA.error, false);
    }
});

//Funcion para llenar la tabla con registros disponibles
//parametros: form con datos de busqueda y no retorna nada
const fillTable = async (form = null) => {
    // Iniciar contenido de la tabla y verificar acción
    ROWS_FOUND.textContent = '';
    TABLE_BODY.innerHTML = '';

    let action = (form) ? 'searchRows' : 'readAll';

    try {
        // Petición para obtener los datos que están disponibles
        const DATA = await fetchData(ESTUDIANTE_API, action, form);

        // Verificar si la respuesta es verdadera, de lo contrario enviar una excepción
        if (DATA && DATA.status) {
            // Recorrer los registros fila por fila
            DATA.dataset.forEach(row => {
                // Crear las filas de registro y concatenarlas
                TABLE_BODY.innerHTML += `
                    <tr>
                        <td>${row.carnet_estudiante}</td>
                        <td>${row.nombre_estudiante}</td>
                        <td>${row.especialidad_estudiante}</td>
                        <td>${row.correo_estudiante}</td>
                        <td>${row.curso_estudiante}</td>
                        <td>
                            <button class="btn btn-danger"><i class="fa-solid fa-trash" onclick="openDelete(${row.id_estudiante})"></i></button>
                            <button class="btn btn-primary"><i class="fa-regular fa-pen-to-square" onclick="openUpdate(${row.id_estudiante})"></i></button>
                        </td>
                    </tr>
                `;
            });

            // Mostrar mensaje de acuerdo al resultado
            ROWS_FOUND.textContent = DATA.message;
        } else {
            sweetAlert(4, DATA.error, true); // Mostrar mensaje de error si DATA no tiene status
        }
    } catch (error) {
        sweetAlert(4, 'Error al procesar los datos', true); // Manejar el error de manera apropiada para el usuario
    }
}



// Función para preparar formulario al momento de agregar registros 
const openCreate = () => {
    // Mostrar el modal de agregar (MODAL_AGREGAR es un objeto que maneja el modal)
    MODAL_AGREGAR.show();
    AGREGAR_TITLE.textContent = 'Agregar Alumno';
    // Resetear el formulario (FORM_SAVE es el formulario que se va a resetear)
    FORM_SAVE.reset();
    // Habilitar los campos de clave de estudiante y confirmación de clave
    CLAVE_ESTUDIANTE.disabled = false;
    CONFIRMAR_CLAVE.disabled = false;
    // Llenar el select de especialidades usando la función fillSelect con ESPECIALIDAD_API
    fillSelect(ESPECIALIDAD_API, 'readAll', 'especialidadEstudiante');
    // Llenar el select de cursos usando la función fillSelect con CURSO_API
    fillSelect(CURSO_API, 'readAll', 'cursoEstudiante');
}



//Funcion asincrona para preparar formulario al momento de actualizar registro 
const openUpdate = async (id) => {
    //se define constante de tipo objeto con los datos del registro que se actualizara 
    const FORM = new FormData();
    FORM.append('idEstudiante', id);
    //peticion para obtener los datos del registro 
    const DATA = await fetchData(ESTUDIANTE_API, 'readOne', FORM);
    //se comprueba la respuesta
    if (DATA.status) {
        MODAL_AGREGAR.show();
        AGREGAR_TITLE.textContent = 'Actualizar Estudiante';
        //se prepara el formulario
        FORM_SAVE.reset();
        CLAVE_ESTUDIANTE.disabled = true;
        CONFIRMAR_CLAVE.disabled = true;
        //se incian los campos con los datos del registro 
        const ROW = DATA.dataset;
        ID_ESTUDIANTE.value = ROW.id_estudiante;
        CARNET_ESTUDIANTE.value = ROW.carnet_estudiante;
        NOMBRE_ESTUDIANTE.value = ROW.nombre_estudiante;
        ESPECIALIDAD_ESTUDIANTE.value = ROW.especialidad_estudiante;
        CORREO_ESTUDIANTE.value = ROW.correo_estudiante;
        CURSO_ESTUDIANTE.value = ROW.curso_estudiante;
    } else {
        sweetAlert(2, DATA.error, false);
    }
}


//Funcion asincrona para eliminar un registro estudiante 
const openDelete = async (id) => {
    //se llama a la funcion de mensaje de confirmacion para eliminar registro 
    const RESPONSE = await confirmAction('¿Desea eliminar al estudiante de forma permanente?');
    //verificar la respuesta del mensaje
    if (RESPONSE) {
        const FORM = new FormData();
        FORM.append('idEstudiante', id);
        //peticion para eliminar alumno seleccionado 
        const DATA = await fetchData(ESTUDIANTE_API, 'deleteRow', FORM);
        //se comprueba la respuesta satisfactoria
        if (DATA.status) {
            //mensaje de exito 
            await sweetAlert(1, DATA.message, true);
            //se recarga la tabla
            fillTable();
        } else {
            sweetAlert(2, DATA.error, false);
        }
    }
}

