const query = {
    getAll : 'SELECT * FROM tlicitacion',
    getById: 'SELECT * FROM tlicitacion WHERE idLicitacion = ?'
}


module.exports = {query}