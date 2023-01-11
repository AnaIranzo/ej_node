const express = require('express');
const path = require('path');
const router = express.Router();
const calculator = require('./modules/calculator')

const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.set('views','./views');

app.use(express.static('public'));//publica en el servidor carpeta public, permite que sean visibles.
/* 
router.get('/',function(req,res){//habilita una nueva ruta, devuelve un documento html, sin router app.get 
    res.sendFile(path.join(__dirname+'/pages/index.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/about',function(req,res){
    res.sendFile(path.join(__dirname+'/pages/about.html'));//path.join sustituye ../
});

router.get('/contact',function(req,res){
    res.sendFile(path.join(__dirname+'/pages/contact.html'));
});
//add the router
app.use('/', router)
 */
;

app.get('/', function(req, res){
    const page ='Home';
    const img1 = 'giphy(1).gif';
    res.render('index',{page, img1});

});
app.get('/about', function(req, res){
    const page ='About';
    const img1 = 'gatito.jpeg'
    res.render('index', {page, img1});
});
app.get('/contact', function(req, res){
    const page ='Contact'
    const img1 = 'IMG_20220513_135210.jpeg'
    res.render('index', {page, img1});
});
app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})

console.log('Running at Port 3000');

