const app = require('./service')

app.set('port', 7777)
const server = app.listen(app.get('port'), ()=> {
    console.log('Collector Online')
});