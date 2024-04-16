function generarMenuIndex() {

        const menuContent = ` 

<nav class="navbar navbar-expand-lg navbar-dark">
    <a class="navbar-brand" href="../admin/inicio.html"><img src="../../resources/img/logo_header.png" alt="Logo"></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
</nav>

 <div class="sidebar mt-5">
 <a href="../admin/inicio.html" class="active"><img src="../../resources/img/hogar.png" alt=""><span
         class="sidebar-text mx-3">Inicio</span></a>
 <a href="../admin/admin_estudiantes.html" class="mt-2"><img src="../../resources/img/alumno.png" alt=""><span
         class="sidebar-text mx-3">Alumnos
         ITR</span></a>
 <a href="../admin/admin_profesores.html" class="mt-2"><img src="../../resources/img/usuario-de-pizarra.png"
         alt=""><span
         class="sidebar-text mx-3">Profesores ITR</span></a>
 <a href="../admin/admin_administradores.html" class="mt-2"><img
         src="../../resources/img/alt-administrador.png" alt=""><span
         class="sidebar-text mx-3">Administradores
         ITR</span></a>
 <a href="#" data-toggle="collapse" data-target="#subopciones" class="mt-2"><img src="../../resources/img/carpeta-abierta (2).png"
         alt=""><span class="sidebar-text mx-3">Gestionar Formularios ↓</span></a>
 <div id="subopciones" class="collapse">
     <ul>
         <li><a href="../../views/admin/admin_roles_ptc.html">Roles PTC</a></li>
         <li><a href="../../views/admin/admin_tipo_propuesta_ptc.html">Tipos de Propuestas</a></li>
         <li><a href="../../views/admin/admin_estado_propuesta_ptc.html">Estados de Propuestas</a></li>
         <li><a href="../../views/admin/admin_rubros_comerciales_ptc.html">Rubros Comerciales</a></li>
     </ul>
 </div>
 <a href="#" data-toggle="collapse" data-target="#subopciones2" class="mt-2"><img src="../../resources/img/caracteristicas.png"
         alt=""><span class="sidebar-text mx-3">Proyectos PTC ↓</span></a>
 <div id="subopciones2" class="collapse">
     <ul>
         <li><a href="#">Crear un Proyecto</a></li>
         <li><a href="#">Proyectos Existentes</a></li>
     </ul>
 </div>
 <a href="../../views/admin/admin_cursos.html" data-toggle="collapse" data-target="#subopciones3" class="mt-2"><img src="../../resources/img/leccion (1).png"
         alt=""><span class="sidebar-text mx-3">Gestionar Cursos ↓</span></a>
 <div id="subopciones3" class="collapse">
     <ul>
         <li><a href="../../views/admin/admin_secciones.html">Secciones</a></li>
         <li><a href="#">Especialidad</a></li>
         <li><a href="#">Grupos</a></li>
         <li><a href="#">Grados</a></li>
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