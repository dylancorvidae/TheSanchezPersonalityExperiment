const client = require('../lib/client');
const questions = require('../data/questions-data');
const answers = require('../data/answer-data');
const mbti = require('../data/mbti-data');
const characters = require('../data/character-data');


client.connect()
    .then(() => {
        return Promise.all(
            answers.map(answer => {
                return client.query(`
                    INSERT INTO answers (text, mbti, question_id)
                    VALUES($1, $2, $3);
        `, [answer.text, answer.mbti_id, answer.question_id]
                );
            })
        );
    })
    .then(() => {
        return Promise.all(
            questions.map(question => {
                return client.query(`
                    INSERT INTO test (question_text, img)
                    VALUES ($1, $2);
                `, [question.question_text, question.img]);
            }),
        );
    })
    .then(() => {
        return Promise.all(
            mbti.map(type => {
                return client.query(`
                    INSERT INTO mbti (name, title, description)
                    VALUES ($1, $2, $3);
                `, [type.name, type.title, type.description]);
            }),
        );
    })
    .then(() => {
        return Promise.all(
            characters.map(char => {
                return client.query(`
                    INSERT INTO characters (name, quote, mbti, profile)
                    VALUES($1, $2, $3, $4);
        `, [char.name, char.quote, char.mbti, char.image]
                );
            })
        );
    })
    .then(
        () => console.log('List data seeded successfully'),
        err => console.log(err)
    )
    .then(() => {
        client.end();
    });
