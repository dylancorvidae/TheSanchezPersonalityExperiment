const client = require('../lib/client');

client.connect()
    .then(() => {
        return client.query(`

    CREATE TABLE answers(
        id SERIAL PRIMARY KEY,
        text VARCHAR(1024) NOT NULL,
        mbti VARCHAR(256)
    );

    CREATE TABLE users(
        id SERIAL PRIMARY KEY,
        email VARCHAR(256) NOT NULL,
        hash VARCHAR(512) NOT NULL,
        token VARCHAR(512),
        display_name VARCHAR(256) NOT NULL
    );

    CREATE TABLE test(
        id SERIAL PRIMARY KEY, 
        question_text VARCHAR(1024),
        answer_one_id INTEGER REFERENCES answers(id),
        answer_two_id INTEGER REFERENCES answers(id),
        answer_three_id INTEGER REFERENCES answers(id),
        answer_four_id INTEGER REFERENCES answers(id)
    );

    
    CREATE TABLE mbti(
        id SERIAL PRIMARY KEY,
        name VARCHAR(256),
        title VARCHAR(256),
        description VARCHAR(1024) 
    );

    CREATE TABLE characters(
        id SERIAL PRIMARY KEY,
        name VARCHAR(256),
        quote VARCHAR(1024),
        mbti VARCHAR(256)
    );

    CREATE TABLE game(
        id SERIAL PRIMARY KEY,
        users_id INTEGER REFERENCES users(id),
        user_answer VARCHAR(256),
        question_order VARCHAR(256),
        is_complete BOOLEAN NOT NULL
    );

`);
    })

    .then(
        () => console.log('tables created'),
        err => console.log(err)
    )

    .then(
        () => { client.end(); }
    );