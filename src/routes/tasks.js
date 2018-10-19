import knex from "../config/knew";

const tasks = {
  method: "GET",
  path: "/tasks",
  handler: (request, reply) => {
    return knex
      .from("tasks")
      .where({ deleted: false, done: false })
      .select("oid", "title")
      .then(results => reply.response(results))
      .catch(err => console.log(err));
  }
};

export default tasks;
