//setting enviromental parameters in code instead of system enviroments
// this part is used only for display purposes to avoid pollution system varaibles
// -----------------------------------------------------
process.env['NODE_ENV'] = 'development';
process.env['DEBUG'] = 'app:core.*';
// -----------------------------------------------------

const express = require('express');
//TODO: set DEBUG from config file instead of env var
const debug = require('debug')('app:core.startup');
const config = require('config');
const admin = require('./routes/admin');

//TODO: move configuration to separate file/module
const port = process.env.PORT || config.get('port') || 3000;

const app = express();
app.use(express.json());

app.use('/api/admin', admin)

//TODO: app.js should contain only application related stuff. Basically like Startup.cs in .NET apps
app.listen(port, () => {
    debug(`Listening on port ${port}`);
});
