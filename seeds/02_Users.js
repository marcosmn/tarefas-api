exports.seed = function(knex, Promise)
{
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function ()
    {
      // Inserts seed entries
      return knex('users').insert
      ([
        {oid: 1, name: 'João',   email: "joao@vdc.com"  , password: "123"},
        {oid: 2, name: 'Lucas',  email: "lluck@123.com" , password: "123"},
        {oid: 3, name: 'Mira',   email: "mira@vdc.com"  , password: "123"}
      ]);
    });
};
