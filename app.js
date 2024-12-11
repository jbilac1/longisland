const express = require('express');
const path = require('path');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');


const app = express();

app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public'))); 

const pageData = {
    destinacije: [
        {
            title: "sakarun",
            img: "./img/sakarun.jpg"
        },
        {
            title: "veli zal",
            img: "./img/velizal.jpg"
        },
        {
            title: "park prirode telascica",
            img: "./img/telascica.jpg"
        }
    ],
    aktivnosti: [
        {
            title: "sakarun",
            img: "./img/sakarun.jpg"
        },
        {
            title: "veli zal",
            img: "./img/velizal.jpg"
        },
        {
            title: "park prirode telascica",
            img: "./img/telascica.jpg"
        }
    ],
    plaze: [
        {
            title: "sakarun",
            img: "./img/sakarun.jpg"
        },
        {
            title: "veli zal",
            img: "./img/velizal.jpg"
        },
        {
            title: "park prirode telascica",
            img: "./img/telascica.jpg"
        }
    ]
}

app.get('/', (req, res)=>{
    res.render('index', {pageData, headerOn: true});
})
app.get('/plaze', (req, res)=>{
    res.render('pages/plaze', {pageData, headerOn: false});
});
app.get('/destinacije', (req, res)=>{
    res.render('pages/destinacije', {pageData, headerOn: false});
});
app.get('/aktivnosti', (req, res)=>{
    res.render('pages/aktivnosti', {pageData, headerOn: false});
});
app.get('*', (req, res)=>{
    res.render('error', {headerOn: false});
})


app.listen(3000, ()=>{
    console.log('Listening on PORT: 3000');
})