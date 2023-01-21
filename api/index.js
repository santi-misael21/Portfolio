const app = require('./src/app.js');

app.set('port', process.env.PORT || 3001);
app.set('json spaces', 2);

//Iniciando el servidor
app.listen(app.get('port'),()=>{
    console.log(`Server listening on port ${app.get('port')}`);
});