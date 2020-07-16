const connection = require('../database/connection');
const { create } = require('./ProdutosController');

module.exports = {
    async create( request, response) {
        const { id } = request.body;

        const user = await connection('users')
        .where('id', id)
        .select('name')
        .first();

        if(!user) {
            return response.status(400).json({ error:'No User found withi this ID'});
        }
        return response.json(user);
    }
}