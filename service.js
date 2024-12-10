/*
    Layered Architecture:
    - api layer -> express
    - application layer -> pure js
    - data access layer -> mongoose: mongo-repository-base.js and mongo-repository-hr.js
 */
// data access: mongoose


const {connection_to_mongodb} = require("./repository/mongo-repository-base");
const {createApi} = require("./api/hr-api");

connection_to_mongodb().then( response => {
    console.log(`Connected to the mongodb instance running at ${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DATABASE}`);
    createApi(() => {
        console.info(`API is listening on port ${process.env.API_PORT || 8100}`);
    })
})
