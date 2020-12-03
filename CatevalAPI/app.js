//setting enviromental parameters in code instead of system enviroments
// this part is used only for display purposes to avoid pollution system varaibles
// -----------------------------------------------------
process.env['NODE_ENV'] = 'development';
process.env['DEBUG'] = 'app.*';
// -----------------------------------------------------

const express = require('express');
//TODO: set DEBUG from config file instead of env var
const debug = require('debug')('app.startup');
const config = require('config');
const routes = require('./routes');

//TODO: move configuration to separate file/module
const port = process.env.PORT || config.get('port') || 3000;

const app = express();
app.use(express.json());

app.use('/api', routes);

//TODO: app.js should contain only application related stuff. 
//Basically like Startup.cs in .NET apps
app.listen(port, () => {
    debug(`Listening on port ${port}`);
});


//TODO:
//* Rule and category relations should be implemented by references on admin side,
//  When editing is finifhed the category should be compiled into one document 
//  whish will be used on calculations

//* Add model's module where api input objects Join schema will be described(for validation)