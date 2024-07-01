//constante para completar ruta de API 
const ESTUDIANTE_API = 'services/estudianteService.php'; 
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
CURSO_ESTUDIANTE = document.getElementById('cursoEstudiante'); 

//metodo del elemento cuando el doc ha cargado 
document.addEventListener('DOMContentLoaded', () => {
    //se llama a la funcion "FILLTABLE" para llenar la tabla con los registros que existan 
    fillTable(); 
}); 

//Metodos para el evento de buscar en el formulario de estudiante 
SEARCH_FORM.addEventListener('submit', (event)=>{
    //se eveita que se recargue la pagina 
    event.preventDefault(); 
    //constante tipo objeto con los datos del formulario de busqueda 
    const FORM = new FormData(SEARCH_FORM); 
    fillTable();  //funcion para llenar tabla segun la busqueda de estudiantes 
}); 


//metodo con el evento de guardar del formulario 
SAVE_FORM.addEventListener('submit', async (event) =>{
    //se eveita que se recargue la pagina 
    event.preventDefault(); 
    //Verifificar la accion a realizar
    (ID_ESTUDIANTE.value) ? action = 'updateRow' : action = 'createRow'; 
    //constante tipo objeto con datos del forms 
    const FORM = new FormData(SAVE_FORM); 
    //se hace la peticion para guadar los datos ingresados en el formulario 
    const DATA = await fetchData(ESTUDIANTE_API, action, FORM); 
    //si la respuesta es verdadera, de lo contrario se envia un excepcion 
    if (DATA.status){
        //se cierra el modal 
        SAVE_MODAL.hide(); 
        sweetAlert(1, DATA.message, true); 
        //se recarga la tabla para ver los cambios 
        fillTable(); 
    }else {
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
    if(DATA.status){
        //se recorren los registros fila por fila 
        DATA.dataset.forEach(row => {
            //se crean las filas de registro y se concatenan 
           // TABLE_BODY.innerHTML += 
        })
    }
 }


    
