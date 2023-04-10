const path = require('path')
const express = require('express')
const app = express()
const bodyParser = require("body-parser");


const router = require('./router/index')

const handlebars = require('express-handlebars')
const db = require('./confix/db/index')
const methodOverride =require('method-override') 
app.listen(8000, () => {

    console.log("Application started and Listening on port 3000");
  });
// server css as static
app.use(express.static(__dirname));


app.use(methodOverride('_method'))
// get our app to use body parser 
app.use(bodyParser.urlencoded({ extended: true }))
//template engine
app.engine('hbs', handlebars.engine({
  extname:"hbs",
  helpers:{
	sum:(a , b) => a+b
}
}));

app.set('view engine','hbs')
app.set('views', path.join(__dirname,  'views'));
console.log( path.join(__dirname, 'views'));
db.connnect()

router(app)


