const query = {
    getAll : 'SELECT * FROM tobra',
    getById: 'SELECT * FROM tobra WHERE idObra = ?',
    insert: 'INSERT INTO `tobra`( `nombre`, `ubicacion`, `fechaInicio`, `presupuesto`, `estado`) VALUES (?,?,?,?,?)',
    update: 'UPDATE `tobra` SET `nombre`=?,`ubicacion`=?,`fechaInicio`=?,`presupuesto`=?,`estado`=? WHERE ?',
    delete: 'DELETE FROM tobra WHERE idObra = ?'
}


module.exports = {query}