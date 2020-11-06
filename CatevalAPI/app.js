const express = require('express');
const admin = require('./routes/admin');

//TODO: move configuration to separate file/module
const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());

app.use('/api/admin', admin)

//TODO: app.js should contain only application related stuff. Basically like Startup.cs in .NET apps
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
