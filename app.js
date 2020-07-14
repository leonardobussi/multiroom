const app = require('./config/server')
const { on } = require('nodemon')

const server = app.listen(80, function(){
    console.log('------------------------------')
    console.log('servidor rodando na porta 80')
    console.log('------------------------------')
})

const io = require('socket.io').listen(server)

app.set('io', io)

io.on('connection', function(socket) {
   console.log('Usuário Conectou') 

   socket.on('disconnect', function(){
       console.log('Ususário desconectou')
   })

   socket.on('msgParaServidor', function(data){
       // dialogos
        socket.emit(
            'msgParaCliente',
            {apelido: data.apelido, mensagem: data.mensagem}
        )
        socket.broadcast.emit(
            'msgParaCliente',
            {apelido: data.apelido, mensagem: data.mensagem}
        )
        // participantes
        if(parseInt(data.apelido_atualizado_nos_clientes) === 0){

        socket.emit(
            'participantesParaCliente',
            {apelido: data.apelido}
        )
        socket.broadcast.emit(
            'participantesParaCliente',
            {apelido: data.apelido}
        )
        }
    })
})