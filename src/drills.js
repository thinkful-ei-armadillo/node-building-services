'use strict';
require('dotenv').config();
const knex = require('knex');

const knexInstance = knex({
  client: 'pg',
  connection: process.env.DB_URL
});

function searchByName(searchTerm){
  knexInstance
    .select ('*')
    .from('shopping_list')
    .where ('name', 'ILIKE', `%${searchTerm}%`)
    .then(result => {
      console.log(result);
    });
}

function getAllItems(pageNumber){
  knexInstance
    .select ('*')
    .from('shopping_list')
    .limit(6)
    .offset((pageNumber -1) * 6)
    .orderBy('id')
    .then(result => {
      console.log(result);
    });
}

function itemsAfterDate(daysAgo){
  knexInstance
    .select('*')
    .from('shopping_list')
    .where('date_added', '>',
      // eslint-disable-next-line quotes
      knexInstance.raw(`now() - '?? days'   ::INTERVAL`, daysAgo))
    .then(result => {
      console.log(result);
    });
}

function getCosts(){
  knexInstance
    .select('category')
    .sum('price')
    .from('shopping_list')
    .groupBy('category')
    .then(result => {
      console.log(result);
    });
}

getCosts();