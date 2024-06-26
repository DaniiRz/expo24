function generarMenuIndex() {

        const menuContent = ` 

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <div class="mx-auto">
            <a class="navbar-brand" href="../../views/admin/inicio.html">
                <img src="../../resources/img/logo_header.png" alt="Imagen Mediana" height="50">
            </a>
            </div>
            <a class="navbar-brand" href="../../views/admin/admin_perfil.html">
                <img src="../../resources/img/usuario.png" alt="Perfil" class="rounded-circle" height="30" style="cursor: pointer;">
            </a>
        </div>
    </nav>
    


<div class="sidebar mt-5">
<a href="../admin/inicio.html" class="active"><img src="../../resources/img/hogar.png" alt=""><span
        class="sidebar-text mx-3">Inicio</span></a>
<a href="../../views/admin/admin_cursos.html" data-toggle="collapse" data-target="#subopciones1" class="mt-2"><img
        src="../../resources/img/leccion (1).png" alt=""><span class="sidebar-text mx-3">Usuarios
        ↓</span></a>
<div id="subopciones1" class="collapse">
    <ul>
        <li><a href="../../views/admin/admin_estudiantes.html">Alumnos ITR</a></li>
        <li><a href="../../views/admin/admin_profesores.html">Profesores ITR</a></li>
        <li><a href="../../views/admin/admin_administradores.html">Administradores ITR</a></li>
    </ul>
</div>
<a href="#" data-toggle="collapse" data-target="#subopciones" class="mt-2"><img
        src="../../resources/img/carpeta-abierta (2).png" alt=""><span class="sidebar-text mx-3">Gestionar
        Formularios ↓</span></a>
<div id="subopciones" class="collapse">
    <ul>
        <li><a href="../../views/admin/admin_roles_ptc.html">Roles PTC</a></li>
        <li><a href="../../views/admin/admin_estado_propuestas.html">Estados de Propuestas</a></li>
        
    </ul>
</div>
<a href="#" data-toggle="collapse" data-target="#subopciones2" class="mt-2"><img
        src="../../resources/img/caracteristicas.png" alt=""><span class="sidebar-text mx-3">Proyectos PTC
        ↓</span></a>
<div id="subopciones2" class="collapse">
    <ul>
        <li><a href="../../views/admin/admin_propuestas_insti.html">Crear un Proyecto</a></li>
        <li><a href="../../views/admin/admin_equipos_ptc.html">Equipos</a></li>
        
    </ul>
</div>
<a href="../../views/admin/admin_cursos.html" data-toggle="collapse" data-target="#subopciones3" class="mt-2"><img
        src="../../resources/img/leccion (1).png" alt=""><span class="sidebar-text mx-3">Gestionar Cursos
        ↓</span></a>
<div id="subopciones3" class="collapse">
    <ul>
        <li><a href="../../views/admin/admin_cursos.html">Cursos</a></li>
        <li><a href="../../views/admin/admin_secciones.html">Secciones</a></li>
        <li><a href="../../views/admin/admin_especialidad.html">Especialidad</a></li>
        <li><a href="../../views/admin/admin_grupos.html">Grupos</a></li>
        <li><a href="../../views/admin/admin_seleccion_niveles.html">Niveles Académicos</a></li>
    </ul>
</div>
<a href="../admin/index.html" class="mt-2"><img src="../../resources/img/salida.png" alt=""><span
        class="sidebar-text mx-3">Cerrar
        Sesión</span></a>
</div>`;

        return menuContent;

}

function generarFooterIndex() {

        const footerIndex = `
<footer id="footer" class="text-center">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <span>&copy;</span>
                <p class="d-inline-block">Sistema Administrativo de Proyectos Técnicos 2024</p>
            </div>
        </div>
    </div>
</footer>
`;
        return footerIndex;

}

/*
$(document).ready(function() {
    // Al abrir un menú, cierra los demás menús abiertos
    $('.collapse').on('show.bs.collapse', function () {
        $('.collapse.show').each(function(){
            $(this).collapse('hide');
        });
    });

    // Al cerrar un menú, asegúrate de cerrar todos los submenús internos
    $('.collapse').on('hide.bs.collapse', function () {
        $(this).find('.collapse.show').collapse('hide');
    });
});*/