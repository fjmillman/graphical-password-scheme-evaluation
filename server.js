const express = require('express');
const body = require('body-parser');
const next = require('next');
const userStudyResult = require("./server/controllers/userStudyResultController");

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();
    server.use(body.urlencoded({
        extended: true
    }));
    server.use(body.json());
    server.post('/userStudyResult', userStudyResult);
    server.get('*', (req, res) => {
        return handle(req, res);
    });
    server.listen(3000, err => {
        if (err) throw err;
        console.log('Server is listening...')
    });
}).catch(err => console.error("Error:" + err));
