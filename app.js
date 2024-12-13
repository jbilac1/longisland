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
            id: 1,
            title: "sakarun",
            img: "./img/sakarun.jpg",
            about: "The beach is particularly popular for windsurfing and kitesurfing due to its ideal wind conditions. Surrounded by pine trees that provide natural shade, Zlatni Rat offers a picturesque setting with crystal-clear turquoise waters. The beach gradually changes its shape, sometimes extending more to one side or the other, which makes it a fascinating geographical feature."
        },
        {
            id: 2,
            title: "veli rat",
            img: "./img/velirat.jpg",
            about: "Svjetionik Veli Rat je jedan od najprepoznatljivijih simbola Dugog otoka. Sa svojih 42 metra visine, on je najviši svjetionik na Jadranu i pravi magnet za turiste. Smješten na sjeverozapadnom dijelu otoka, ovaj impozantni svjetionik pruža spektakularne poglede na okolne otoke i beskrajno plavetnilo mora."
        },
        {
            id: 3,
            title: "telascica",
            img: "./img/telascica.jpg",
            about: "Park prirode Telašćica smješten je na jugoistočnom dijelu Dugog otoka i predstavlja jedno od najvećih prirodnih bogatstava Hrvatske. Ovaj zaštićeni krajolik oduševljava svojom ljepotom, raznolikošću i bogatstvom flore i faune."
        }
    ],
    aktivnosti: [
        {
            id: 4,
            title: "Grapašćak",
            img: "./img/grapascak.jpg",
            about: "Fort Grapašćak je povijesna tvrđava smještena na otoku Dugom, iznad mjesta Sali. Ova impozantna građevina sagrađena je u 16."
        },
        {
            id: 5,
            title: "Golubinka",
            img: "./img/golubinka.jpg",
            about: "Špilja Golubinka je jedna od najvećih prirodnih atrakcija Dugog otoka. Smještena u blizini uvale Brbinjšćica, ova špilja privlači sve veći broj turista i avanturista svake godine"
        },
        {
            id: 6,
            title: "telascica",
            img: "./img/telascica.jpg",
            about: "The beach is particularly popular for windsurfing and kitesurfing due to its ideal wind conditions. Surrounded by pine trees that provide natural shade, Zlatni Rat offers a picturesque setting with crystal-clear turquoise waters. The beach gradually changes its shape, sometimes extending more to one side or the other, which makes it a fascinating geographical feature."
        }
    ],
    plaze: [
        {
            id: 7,
            title: "sakarun",
            img: "./img/sakarun.jpg",
            about: "Želite li provesti dan na plaži, Sakarun je savršen izbor. Osim kupanja i sunčanja, možete uživati u brojnim aktivnostima poput ronjenja, jedrenja na dasci ili jednostavno šetnje uz obalu. U blizini plaže nalaze se restorani i barovi gdje možete osvježiti se i kušati lokalne specijalitete."
        },
        {
            id: 8,
            title: "veli zal",
            img: "./img/velizal.jpg",
            about: "Veli Žal, iako možda ne tako poznata kao neke druge plaže na Jadranu, predstavlja pravo osvježenje za one koji traže mirnije i manje gužve. Smještena na Dugom otoku, ova plaža nudi posebnu atmosferu i ljepote koje će vas očarati."
        },
        {
            id: 9,
            title: "soline",
            img: "./img/mandarino.jpg",
            about: "Plaža Soline na Dugom otoku predstavlja pravo osvježenje za sve one koji traže mirnije i manje gužve od popularnih plaža poput Sakaruna. Smještena u uvali Solišćica, ova plaža nudi posebnu atmosferu i ljepote koje će vas očarati."
        }
    ]
}


app.get('/', (req, res)=>{
    res.render('index', {pageData, headerOn: true});
})

app.get('/list', (req, res)=>{
    const cat = req.query.cat;
    switch(cat){
        case 'd':
            res.render('pages/list', {category: "destinacije", headerOn: false, pageData: pageData.destinacije})      
        case 'a':
            res.render('pages/list', {category: "aktivnosti", headerOn: false, pageData: pageData.aktivnosti})
        case 'p':
            res.render('pages/list', {category: "plaze", headerOn: false, pageData: pageData.plaze})       
    }
});

app.get('/show/:id', (req, res)=>{
    const {id} = req.params;
    const {cat} = req.query;
    switch(cat){
        case 'd':
            for(let item of pageData.destinacije){
                if(item.id == id){
                    res.render('pages/show', {title: item.title, item: item, headerOn: false, returnUrl: "/destinacije", cat:cat})
                }
            }
        case 'a':
             for(let item of pageData.aktivnosti){
                if(item.id == id){
                    res.render('pages/show', {title: item.title, item: item, headerOn: false, returnUrl: "/aktivnosti", cat:cat})
                }
            }
        case 'p':
            for(let item of pageData.plaze){
                if(item.id == id){
                    res.render('pages/show', {title: item.title, item: item, headerOn: false, returnUrl: "/plaze", cat:cat})
                }
            }
    }
})

app.get('*', (req, res)=>{
    res.render('error', {headerOn: false});
})


app.listen(3000, ()=>{
    console.log('Listening on PORT: 3000');
})