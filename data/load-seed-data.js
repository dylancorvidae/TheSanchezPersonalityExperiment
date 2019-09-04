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
                    INSERT INTO answers (text, mbti)
                    VALUES($1, $2);
        `, [answer.text, answer.mbti]
                );
            })
        );
    })
    .then(() => {
        return Promise.all(
            questions.map(question => {
                return client.query(`
                    INSERT INTO test (question_text, answer_one_id, answer_two_id, answer_three_id, answer_four_id)
                    VALUES ($1, $2, $3, $4, $5);
                `, [question.question_text, question.answer_one_id, question.answer_two_id, question.answer_three_id, question.answer_four_id]);
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
                    INSERT INTO characters (name, quote, mbti)
                    VALUES($1, $2, $3);
        `, [char.name, char.quote, char.mbti]
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







    // .then(() => {
    //     return Promise.all(
    //         answers.map(answer => {
    //             return client.query(`
    //                 INSERT INTO answers (mbti_id)
    //                 SELECT m.id
    //                 FROM mbti m
    //                 JOIN answers a
    //                 ON m.id = a.mbti_id
    //                 WHERE m.name = a.mbti;
    //                 `);
    //         })
    //     );
    // })