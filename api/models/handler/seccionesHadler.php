<?php
// Se incluye la clase para trabajar con la base de datos.
require_once('../../helpers/database.php');
/*
 *  Clase para manejar el comportamiento de los datos de la tabla secciones.
 */

 class SeccionHandler
 {
    /*
     *  Declaración de atributos para el manejo de datos.
     */
    protected $id = null;
    protected $seccion = null;

    /*
     *  Métodos para realizar las operaciones SCRUD (search, create, read, update, and delete).
     */
    public function searchRows()
    {
        $value = '%' . Validator::getSearchValue() . '%';
        $sql = 'SELECT id_seccion, secciones
                FROM secciones
                WHERE id_seccion LIKE ? OR secciones LIKE ?
                ORDER BY id_seccion';
        $params = array($value, $value);
        return Database::getRows($sql, $params);
    }

    public function createRow()
    {
        $sql = 'INSERT INTO secciones(secciones)
                VALUES(?)';
        $params = array($this->seccion);
        return Database::executeRow($sql, $params);
    }

    public function readAll()
    {
        $sql = 'SELECT id_seccion, secciones
                FROM secciones
                ORDER BY secciones';
        return Database::getRows($sql);
    }

    public function readOne()
    {
        $sql = 'SELECT id_seccion, secciones
                FROM secciones
                WHERE id_seccion = ?';
        $params = array($this->id);
        return Database::getRow($sql, $params);
    }

    public function updateRow()
    {
        $sql = 'UPDATE secciones
                SET secciones = ?
                WHERE id_seccion = ?';
        $params = array($this->seccion, $this->id);
        return Database::executeRow($sql, $params);
    }

    public function deleteRow()
    {
        $sql = 'DELETE FROM seccion
                WHERE id_seccion = ?';
        $params = array($this->id);
        return Database::executeRow($sql, $params);
    }
 }