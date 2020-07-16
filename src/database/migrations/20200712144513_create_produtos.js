
exports.up = function(knex) {
    return knex.schema.createTable('produtos', function (table) {
        table.increments();
        table.string('name').notNullable();
        table.string('categoria').notNullable();
        table.decimal('estoque').notNullable();
        table.decimal('minimo').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('produtos');
};
