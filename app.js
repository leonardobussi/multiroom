const app = require('./config/server')

app.listen(80, function(){
    console.log('------------------------------')
    console.log('servidor rodando na porta 80')
    console.log('------------------------------')
})