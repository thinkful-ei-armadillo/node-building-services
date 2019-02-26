require('dotenv').config();

const service = require('../src/shopping-list-service');

const knex = require('knex');

const db = knex({
  client: 'pg',
  connection: process.env.TEST_DB_URL,
});


after(() => {
  return db.destroy();
});

describe('getAll', () => {

  let seedData = null;

  beforeEach(() => {

    seedData = [
      {
        "category": "Main",
        "checked": false,
        "date_added": new Date('2029-01-21T05:00:00.000Z'),
        "id": 1,
        "name": "Fish Tricks",
        "price": "13.10",
      },
      {
        "category": "Snack",
        "checked": false,
        "date_added": new Date('2029-01-21T05:00:00.000Z'),
        "id": 2,
        "name": "Not Dogs",
        "price": "4.99",
      },
      {
        "category": "Snack",
        "checked": false,
        "date_added": new Date('2029-01-21T05:00:00.000Z'),
        "id": 3,
        "name": "Bluffalo Wings",
        "price": "5.50",
      }
    ];

    return db('shopping_list').truncate().then(() => {

      return db('shopping_list').insert(seedData);
    });
  });

  afterEach(() => {

    return db('shopping_list').truncate();
  });

  it('xxxxxx', () => {

    return service.getAll(db).then((results) => {

      expect(results).to.deep.equal(seedData);
    });
  });

});

// describe('get', () => {

//   beforeEach(() => {
//     // create DB
//   });

//   afterEach(() => {
//     // destroy DB
//   });

//   it('xxxxxx', () => {

//   });

// });
// describe('create', () => {

//   beforeEach(() => {
//     // create DB
//   });

//   afterEach(() => {
//     // destroy DB
//   });

//   it('xxxxxx', () => {

//   });

// });
// describe('update', () => {

//   beforeEach(() => {
//     // create DB
//   });

//   afterEach(() => {
//     // destroy DB
//   });

//   it('xxxxxx', () => {

//   });

// });
// describe('destroy', () => {

//   beforeEach(() => {
//     // create DB
//   });

//   afterEach(() => {
//     // destroy DB
//   });

//   it('xxxxxx', () => {

//   });

// });



// create db
// do test
// empty db
