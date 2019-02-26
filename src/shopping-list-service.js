
//

const getAll = (knex) => {

  return knex
    .select('*')
    .from('shopping_list')
    .orderBy('id');
};

const get = (knex, id) => {

  return knex
    .select('*')
    .from('shopping_list')
    .where('id', id);
};

const create = (knex, data) => {

  return knex('shopping_list').insert(data);
};

const update = (knex, id, data) => {

  return knex('shopping_list').where({ id: id }).update(data);
};

const destroy = (knex, id) => {

  return knex('shopping_list').del().where({ id: id });
};


module.exports = {
  getAll,
  get,
  create,
  update,
  destroy,
};
