
//

const getAll = (knex) => {

  return knex
    .select('*')
    .from('shopping_list')
    .orderBy('id');
};

const get = (knex, id) => {

  // asdfs
};

const create = (knex, data) => {

  // sdfasdf
};

const update = (knex, id, data) => {

  // sdfasdf
};

const destroy = (knex, id) => {

  // sdfasdf
};


module.exports = {
  getAll,
  get,
  create,
  update,
  destroy,
};
