const connection = require('../database/connection');

module.exports = {
    async index(request, response) { 
      
       const produtos= await connection('produtos')
      .where('estoque' , '=', 1 )
     .select('name','estoque', 'minimo');      
            return response.json(produtos);  
    }
} 