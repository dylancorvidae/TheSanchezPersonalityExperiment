const client = require('../lib/client');

client.connect()
    .then(() => {
        return client.query(`
    CREATE TABLE questions(
        id SERIAL PRIMARY KEY, 
        text VARCHAR(1024) NOT NULL
    );

    CREATE TABLE answers(
        id SERIAL PRIMARY KEY,
        text VARCHAR(1024) NOT NULL,
        mbti_id INTEGER REFERENCES mbti(id),
        question_id INTEGER REFERENCES questions(id)
    );

    CREATE TABLE characters(
        id SERIAL PRIMARY KEY,
        name VARCHAR(256) NOT NULL,
        quote VARCHAR(1024),
        mbti_id INTEGER REFERENCES mbti(id)
    );

    CREATE TABLE mbti(
        id SERIAL PRIMARY KEY,
        name VARCHAR(256) NOT NULL,
        title VARCHAR(256) NOT NULL,
        desc VARCHAR(1024) NOT NULL
    );

    CREATE TABLE test(
        id SERIAL PRIMARY KEY,
        test_number INTEGER NOT NULL,
        answers VARCHAR(1024),
        users_id INTEGER REFERENCES users(id),
        mbti_id INTEGER REFERENCES mbti(id),
        character_id INTEGER REFERENCES characters(id)
    );

    CREATE TABLE users(
        id SERIAL PRIMARY KEY,
        email VARCHAR(256) NOT NULL,
        hash VARCHAR(512) NOT NULL,
        token VARCHAR(512)
        display_name VARCHAR(256) NOT NULL
    );`
        );
    })

    .then(

        () => console.log('tables created'),
        err => console.log(err)
    )

    .then(

        () => { client.end(); }
    );