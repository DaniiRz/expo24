Proyecto Técnico Científico ITR 2024
"Sistema Administrativo de Proyectos Técnicos"

Integrantes: 
Carlos Eduardo Quintanilla Escobar 
Daniela Alexandra Ramirez Chàvez 
Osmar Alejandro Rodas Rodriguez 
Andrès Eleazar Hernandez 
Diego Enrique Juarez Mazariego 


ESTADARES DE CODIGO PARA DESARROLLO

INDICACIONES GENERALES:

* Cualquier funcion, vista, procedimiento almacenado, trigger debera agregarse en una carpeta llamada Features (Funcionalidades), dentro del proyecto. Está carpeta tendra las capetas correspondientes para agregar las funcionalidades correspondientes.
  Por lo que en el backUp de la base de datos solo pueden existir tablas y consultas de seleccion.

* Las carpetas dentro de features estaran llamadas con el nombre de la funcionalidad a almacenar y una F al final Ej. (TriggersF)

* Los archivos dentro de las capertas de funcionalidades almacenaran todas las consultas relacionadas exclusivamente a la funcionalidad. No importara a que tabla este orientada.
  
* Las capertas estaran nombradas en ingles.

* Para crear un archivo controller se debe colocar el nombre del archivo html con el cual trabajara y agregarle el sufijo Controller. Ejemplo: "IndexController.js"

* En lugar de crear un controlador detalle de alguna interfaz, se debe trabajar las tablas relacionadas dentro de un mismo controler.


*TODOS LOS DOCUMENTOS TENDRAN SANGRIA DE 4 ESPACIOS*

---Acuerdo de Nombres---

---PHP---

* Usar PascalCase para nombres de clases. ( Ejemplo Handler: DetalleCursoHandler, Data: DetalleCursoData, Services: DetalleCursoService)
* Usar camelCase para nombres de funciones y metodos.
* Usar snake_case para nombres de variables.

---JavaScript---

* Usar snake_case para nombres de variables.
* Usar camelCase para nombres de funciones y métodos.
* Usar PascalCase para nombres de clases. (EquipoDetalle.js)

---HTML---

* Usar snake_case para los nombres de los archivos HTML.
* Los identeficadores de los elementos (id's) se escribiran usando camelCase y con la siguiente nomeclatura Ejemplo:(idNombreAdministrador)
* Los names o nombres de los elementos (names's) se escribiran usando camelCase y con la siguiente nomeclatura Ejemplo:(phpNombreAdministrador) de esta forma sera mas fácil diferenciarlos y evitar la espera de identificadores incorrectos
* Los nombres deben ser claros y descriptivos.

---MySQL---
Nombres de Tablas y Columnas:

* Usar snake_case para los nombres de tablas y columnas.
* Los nombres deben ser claros y descriptivos.
