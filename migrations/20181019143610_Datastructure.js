exports.up = function(knex, Promise) {
  return knex.schema.createTable("tasks", function(tasksTable) {
    // chave primária
    tasksTable.increments("oid");

    // estrutura
    tasksTable.string("title", 50).notNullable();
    tasksTable.string("description", 250).notNullable();
    tasksTable.boolean("deleted");
    tasksTable.boolean("done");

    // timestamp
    tasksTable
      .timestamp("created_at")
      .notNullable()
      .defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("tasks");
};
