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
        answer_four_id INTEGER REFERENCES answers(id),
        user_answer VARCHAR(256),
        users_id INTEGER REFERENCES users(id)
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

`
        );
    })

    .then(

        () => console.log('tables created'),
        err => console.log(err)
    )

    .then(

        () => { client.end(); }
    );