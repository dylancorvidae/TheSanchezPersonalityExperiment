const client = require('../lib/client');

client.connect()
    .then(() => {
        return client.query(`
    DROP TABLE IF EXISTS questions,
    DROP TABLE IF EXISTS answers,
    DROP TABLE IF EXISTS characters,
    DROP TABLE IF EXISTS mbti,
    DROP TABLE IF EXISTS users,
    DROP TABLE IF EXISTS test
    `);
    }
    )

    .then(

        () => console.log('tables dropped'),
        err => console.log(err)
    )

    .then(

        () => { client.end(); }
    );