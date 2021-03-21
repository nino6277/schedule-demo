const express = require('express');
const app = express();
const PORT = 8080;
app.use( express.json() );

app.listen(
    PORT,
    () => { console.log(`It's alive on http://localhost:${PORT}`); }
)

app.get('/schedule', (_req, res) => {
    res.status(200).send({
        scheduls: [
            { id: 1, name: '8:00 - 8:30' },
            { id: 2, name: '9:00 - 9:30' },
            { id: 3, name: '10:00 - 10:30' }
        ]
    });
});







