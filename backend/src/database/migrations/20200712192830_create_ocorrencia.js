
exports.up = function(knex) {
  return knex.schema.createTable('ocorrencia', function(table){
      table.increments();
      

      table.string('title').notNullable();
      table.string('description').notNullable();
      table.string('effectiveDate').notNullable();
      table.boolean('done').notNullable();

      table.string('account_id').notNullable();

      table.foreign('account_id').references('id').inTable('account');

  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('ocorrencia');
};
