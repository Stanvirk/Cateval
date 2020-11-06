//setting enviromental parameters in code instead of system enviroments
// this part is used only for display purposes to avoid pollution system varaibles
// -----------------------------------------------------
process.env['NODE_ENV'] = 'development';
// -----------------------------------------------------

const express = require('express');
const config = require('config');
const admin = require('./routes/admin');

//TODO: move configuration to separate file/module
const port = process.env.PORT || config.get('port') || 3000;

const app = express();
app.use(express.json());

app.use('/api/admin', admin)

//TODO: app.js should contain only application related stuff. Basically like Startup.cs in .NET apps
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
