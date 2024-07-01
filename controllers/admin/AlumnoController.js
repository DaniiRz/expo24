//constante para completar ruta de API 
const ESTUDIANTE_API = 'services/estudianteService.php';
const ESPECIALIDAD_API = 'services/especialidadService.php';  
const CURSO_API = 'services/cursoService.php'; 
//Constante para establecer el formulartio de busqueda 
const SEARCH_FORM = document.getElementById('searchForm');
//Constante para establecer elementos de la tabla
const TABLE_BODY = document.getElementById('tableBody'),
    ROWS_FOUND = document.getElementById('rowsFound');
//Constante para establecer los elementos del modal de agregarEstudiante 
const SAVE_MODAL = new bootstrap.Modal('#AgregarEstudiante'),
    MODAL_TITLE = document.getElementById('modalTitle');
//constantes para establecer los datos del formulario guardar
const SAVE_FORM = document.getElementById('saveForm'),
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
SAVE_FORM.addEventListener('submit', async (event) => {
    //se eveita que se recargue la pagina 
    event.preventDefault();
    //Verifificar la accion a realizar
    (ID_ESTUDIANTE.value) ? action = 'updateRow' : action = 'createRow';
    //constante tipo objeto con datos del forms 
    const FORM = new FormData(SAVE_FORM);
    //se hace la peticion para guadar los datos ingresados en el formulario 
    const DATA = await fetchData(ESTUDIANTE_API, action, FORM);
    //si la respuesta es verdadera, de lo contrario se envia un excepcion 
    if (DATA.status) {
        //se cierra el modal 
        SAVE_MODAL.hide();
        sweetAlert(1, DATA.message, true);
        //se recarga la tabla para ver los cambios 
        fillTable();
    } else {
        sweetAlert(2, DATA.error, false);
    }
});

//Funcion para llenar la tabla con registros disponibles
//parametros: Form con datos de busqueda y no retonora nada
const fillTable = async (form = null) => {
    //se inicia contenido de la tabla 
    ROWS_FOUND.textContent = '';
    TABLE_BODY.innerHTML = '';
    //verififcar la accion que se va a realizar 
    (form) ? action = 'searchRows' : action = 'readAll';
    //peticion para obtener los datos que estan disponibles 
    const DATA = await fetchData(ESTUDIANTE_API, action, form);
    //se comprueba si la respuesta es verdadera, de lo contrario se envia un excepcion 
    if (DATA.status) {
        //se recorren los registros fila por fila 
        DATA.dataset.forEach(row => {
            //se crean las filas de registro y se concatenan 
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
        //se muestra mensaje de acuerdo al resultado 
        ROWS_FOUND.textContent = DATA.message;
    } else {
        sweetAlert(4, DATA.error, true);
    }
}


//Funcion para preparar formulario al moento de agregar registros 
const openCreate = () => {
    SAVE_MODAL.show();
    //preparacion de formulario 
    SAVE_FORM.reset();
    CLAVE_ESTUDIANTE.disabled = false;
    CONFIRMAR_CLAVE.disabled = false;
    //captura las especialidades y las muestra en el select 
    fillSelect(ESPECIALIDAD_API, 'readAll', 'especialidadEstudiante'); 
    //captura los cursos y los muestra en el select 
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
        SAVE_MODAL.show();
        MODAL_TITLE.textContent = 'Actualizar Estudiante';
        //se prepara el formulario
        SAVE_FORM.reset();
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

