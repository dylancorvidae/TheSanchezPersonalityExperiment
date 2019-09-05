require('dotenv').config();

const express = require('express');
const cors = require('cors');
// const morgan = require('morgan');

const client = require('./lib/client');

client.connect();

const ensureAuth = require('./lib/auth/ensure-auth');
const createAuthRoutes = require('./lib/auth/create-auth-routes');
const authRoutes = createAuthRoutes({
    selectUser(email) {
        return client.query(`
            SELECT id, email, hash, display_name as "displayName"
            FROM users
            WHERE email = $1;
        `,
            [email]
        ).then(result => result.rows[0]);
    },
    insertUser(user, hash) {
        return client.query(`
            INSERT into users (email, hash, display_name)
            VALUES ($1, $2, $3)
            RETURNING id, email, display_name as "displayName";
        `,
            [user.email, hash, user.displayName]
        ).then(result => result.rows[0]);
    }
});

const app = express();
const PORT = process.env.PORT;
// app.use(morgan('dev'));
app.use(cors());
app.use(express.static('public'));
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api', ensureAuth);

//ROUTES

app.get('/api/test', (req, res) => {
    console.log('SERVER CALL')
    client.query(`
        SELECT * FROM test;
    `)
        .then(result => {
            res.json(result.rows);
        })
        .catch(err => {
            res.status(500).json({
                error: err.message || err
            });
        });
});

app.get('/api/answers', (req, res) => {
    client.query(`
        SELECT * FROM answers;
    `)
        .then(result => {
            res.json(result.rows);
        })
        .catch(err => {
            res.status(500).json({
                error: err.message || err
            });
        });
});

app.get('/api/game', (req, res) => {
    client.query(`
        SELECT * FROM game WHERE users_id = $1;
    `, [req.userId])
        .then(result => {
            res.json(result.rows);
        })
        .catch(err => {
            res.status(500).json({
                error: err.message || err
            });
        });
})

app.put('/api/game/:id', (req, res) => {
    const data = req.body;
    const id = req.params.id;
    if (data.quizOrder) {
        client.query(`
        UPDATE game SET question_order = $1 WHERE id = $2;
        `, [data.quizOrder, id]
        )
            .then(result => {
                res.json(result.rows[0]);
            })
            .catch(err => {
                res.status(500).json({
                    error: err.message || err
                });
            });
    }
});

app.post('/api/game', (req, res) => {
    client.query(`
        INSERT INTO game (users_id, question_order, is_complete)
        VALUES ($1, $2, $3)
        RETURNING *;
    `, [req.userId, req.body.order, false])
        .then(result => {
            res.json(result.rows[0]);
        })
        .catch(err => {
            res.status(500).json({
                error: err.message || err
            });
        });
});


// Start the server
app.listen(PORT, () => {
    console.log('server running on PORT', PORT);
});