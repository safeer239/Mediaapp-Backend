//import json server
const jsonserver= require('json-server')

//create  a server for media app
const mediaAppServer=  jsonserver.create()

//setup path for json file
const router =jsonserver.router('db.json')


//return middleware used by jsonserver
const middleware= jsonserver.defaults()

//setup port number
const port = process.env.port || 4000

//usee middleware in app
mediaAppServer.use(middleware)
mediaAppServer.use(router)

// to listen for resolving request from client
mediaAppServer.listen(port,()=>{
    console.log('listening on port'+port);
})