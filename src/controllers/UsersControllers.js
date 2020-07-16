const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async index(request, response) {
        const users = await connection('users').select('*');
        
        return response.json(users);
    },

    async create(request, response) {
        const {name, email, senha } = request.body;
    
    const id = crypto.randomBytes(4).toString('hex');

     await connection('users').insert({
        id,
        name,
        email,
        senha,
    })

    return response.json({ email });
    }
};