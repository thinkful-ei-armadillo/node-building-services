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

describe('get', () => {

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

    return service.get(db, 1).then((results) => {

      expect(results[0]).to.deep.equal(seedData[0]);
    });
  });
});

describe('create', () => {

  let newItem = null;

  beforeEach(() => {

    newItem = {
      "category": "Main",
      "checked": false,
      "date_added": new Date('2029-01-21T05:00:00.000Z'),
      "id": 1,
      "name": "Fish Tricks",
      "price": "13.10",
    };

    return db('shopping_list').truncate();
  });

  afterEach(() => {

    return db('shopping_list').truncate();
  });

  it('xxxxxx', () => {

    return service.create(db, newItem).then(() => {

      return service.getAll(db).then((results => {

        expect(results[0]).to.deep.equal(newItem);
      }));
    });
  });
});

describe('update', () => {

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
    ];

    return db('shopping_list').truncate().then(() => {

      return db('shopping_list').insert(seedData);
    });
  });

  afterEach(() => {

    return db('shopping_list').truncate();
  });

  it('xxxxxx', () => {

    const updates = {
      "name": "Bluffalo Wings",
    };

    return service.update(db, seedData[0].id, updates).then(() => {

      return service.get(db, seedData[0].id).then((results) => {

        expect(results[0].name).to.equal(updates.name);
      });

    });
  });
});

describe('destroy', () => {

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
    ];

    return db('shopping_list').truncate().then(() => {

      return db('shopping_list').insert(seedData);
    });
  });

  afterEach(() => {

    return db('shopping_list').truncate();
  });

  it('xxxxxx', () => {

    return service.destroy(db, seedData[0].id).then(() => {

      return service.get(db, seedData[0].id).then((results) => {

        expect(results).to.deep.equal([]);
      });

    });
  });
});
