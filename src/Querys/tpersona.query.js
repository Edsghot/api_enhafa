const query = {
    getAll : 'SELECT * FROM tpersona',
    getById: 'SELECT * FROM tpersona WHERE idObra = ?',
    insert: 'INSERT INTO `tpersona`( `nombre`, `ubicacion`, `fechaInicio`, `presupuesto`, `estado`) VALUES (?,?,?,?,?)',
    update: 'UPDATE `tpersona` SET `nombre`=?,`ubicacion`=?,`fechaInicio`=?,`presupuesto`=?,`estado`=? WHERE ?',
    delete: 'DELETE FROM tpersona WHERE idObra = ?'
}


module.exports = {query}