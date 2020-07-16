const connection = require('../database/connection');


module.exports = {
    async index(request, response) {
        const { page = 1} = request.query;

        const produtos = await connection('produtos')
        .limit(5)
        .offset((page-1) * 5)
        .select('*');
        
        return response.json(produtos);
    },

    async create(request, response) {
        const { name, categoria, estoque, minimo} = request.body;

       const [id] = await connection('produtos').insert({
            name,
            categoria,
            estoque,
            minimo,
        });

    return response.json({id});
    },

    async delete(request, response) {
        const {id} = request.params;
        console.log(id);

       await connection('produtos').where('id', id).delete();
        return response.status(204).send();
    }
};