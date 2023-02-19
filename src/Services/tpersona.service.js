const {pool} = require('../database/connection.js')
const {query} = require('../Querys/tpersona.query')



class tpersonaService{

    async create(data){
        
    }

    async find(){
        const[result] = await pool.query(query.getAll);

        return result;
    }

    async findOne(id){
        const [result] = await pool.query(query.getById,[id])

        return result;
    }

    async update(id,changes){

    }

    async delete(id){

    }
}

module.exports = tpersonaService
