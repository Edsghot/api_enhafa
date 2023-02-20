const { pool } = require("../database/connection.js");
const { query } = require("../Querys/tobra.query");

class tobraService {
  async create(data) {
    try {
      const [result] = await pool.query(query.insert, [
        data.nombre,
        data.ubicacion,
        data.fechaInicio,
        data.presupuesto,
        data.estado,
      ]);
      return { message: "operacion exitosa" };;
    } catch (err) {
      return { message: err.message };
    }
  }

  async find() {
    const [result] = await pool.query(query.getAll);
    return result;
  }

  async findOne(id) {
    try{
      const [result] = await pool.query(query.getById, [id]);
      return result
    }catch(err){
      return {message: err.message}
    } 
  }

  async update(id, data) {
    try{
      await pool.query(query.update,[
        data.nombre,
        data.ubicacion,
        data.fechaInicio,
        data.presupuesto,
        data.estado,
        id
      ]);
      return {message: "operacion exitosa"}
    }catch(err){
      return {message: err.message}
    }
  }

  async delete(id) {
    try{
      const res = await pool.query(query.delete,[id])
      if(res[0].affectedRows != 0){
        return {message: "operacion exitosa"}
      }else{
        return {message: "not found"}
      }
        
      
    }catch(err){
        return {message: err.message}
    }
  }
}
module.exports = tobraService;
