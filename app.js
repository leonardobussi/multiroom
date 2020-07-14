const app = require('./config/server')

const server = app.listen(80, function(){
    console.log('------------------------------')
    console.log('servidor rodando na porta 80')
    console.log('------------------------------')
})

require('socket.io').listen(server)