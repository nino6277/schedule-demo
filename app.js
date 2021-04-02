const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');

// express app
const app = express();
const PORT = 8080;
const DB = 'mongodb+srv://test123:test123@ceroclouster.eis0m.mongodb.net/schedule?retryWrites=true&w=majority';

mongoose.connect( DB, { useNewUrlParser: true, useUnifiedTopology: true } )
.then(() => console.log('Connected to database') )
.catch((err) => console.log(err)); 

app.use( express.json(), cors() );
app.options('*', cors());

app.listen(
    PORT,
    () => { console.log(`It's alive on http://localhost:${PORT}`); }
)

app.get('/schedule', (_req, _res) => {
    _res.status(200).send({
        scheduls: [
            { id: 1, name: '8:00 - 8:30' },
            { id: 2, name: '9:00 - 9:30' },
            { id: 3, name: '10:00 - 10:30' }
        ]
    });
});







