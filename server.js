require('dotenv').config();

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

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
            RETURNING id, email, display_name as "displayName"
        `,
        [user.email, hash, user.displayName]
        ).then(result => result.rows[0]);
    }
});

const app = express();
const PORT = process.env.PORT;
app.use(morgan('dev'));
app.use(cors());
app.use(express.static('public'));
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api', ensureAuth);

//ROUTES

app.get('/api/test', (req, res) => {
    client.query(`
        SELECT * FROM test
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
        SELECT * FROM answers
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


app.put('/api/game/:id', (req, res) => {
    console.log('SERVER', req.params.id);
    const data = req.body;
    const id = req.params.id;
    if(data.quizOrder) {
        client.query(`
        UPDATE game SET question_order = $1 WHERE id = $2
        `[data.quizOrder, id]
        )
            .then(result => {
                console.log(result);
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
    const userId = req.body.userId;
    client.query(`
        INSERT INTO game (user_id)
        VALUES ($1)
        RETURNING id;
    `[userId])
        .then(result => {
            console.log(result);
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