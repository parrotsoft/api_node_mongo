const c = console.log;
const app = require('./app');

app.listen(
    app.get('port'),
    () => c(`Iniciando API RestFull en el puerto ${app.get('port')}`)
);

c(
    '********** VARIABLES DE ENTORNO **********\n',
    process.env.NODE_ENV,
    '\n',
    process.env.urlDB,
    '\n',
    process.env.PORT,
    '\n********** VARIABLES DE ENTORNO **********'
);