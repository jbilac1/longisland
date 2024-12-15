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
    mjesta: [
        {
            id: 1,
            title: "Veli Rat",
            img: "./img/velirat.jpg",
            imgsm:"./img/velirat.jpg",
            about: "The beach is particularly popular for windsurfing and kitesurfing due to its ideal wind conditions. Surrounded by pine trees that provide natural shade, Zlatni Rat offers a picturesque setting with crystal-clear turquoise waters. The beach gradually changes its shape, sometimes extending more to one side or the other, which makes it a fascinating geographical feature."
        },
        {
            id: 2,
            title: "Verunic",
            img: "./img/verunic.jpg",
            imgsm:"./img/verunic.jpg",
            about: "Svjetionik Veli Rat je jedan od najprepoznatljivijih simbola Dugog otoka. Sa svojih 42 metra visine, on je najviši svjetionik na Jadranu i pravi magnet za turiste. Smješten na sjeverozapadnom dijelu otoka, ovaj impozantni svjetionik pruža spektakularne poglede na okolne otoke i beskrajno plavetnilo mora."
        },
        {
            id: 3,
            title: "Soline",
            img: "./img/soline.jpg",
            imgsm:"./img/soline.jpg",
            about: "Park prirode Telašćica smješten je na jugoistočnom dijelu Dugog otoka i predstavlja jedno od najvećih prirodnih bogatstava Hrvatske. Ovaj zaštićeni krajolik oduševljava svojom ljepotom, raznolikošću i bogatstvom flore i faune."
        },
        {
            id: 4,
            title: "Božava",
            img: "./img/bozava.jpg",
            imgsm:"./img/bozava.jpg",
            about: "Svjetionik Veli Rat je jedan od najprepoznatljivijih simbola Dugog otoka. Sa svojih 42 metra visine, on je najviši svjetionik na Jadranu i pravi magnet za turiste. Smješten na sjeverozapadnom dijelu otoka, ovaj impozantni svjetionik pruža spektakularne poglede na okolne otoke i beskrajno plavetnilo mora."
        },
        {
            id: 5,
            title: "Dragove",
            img: "./img/dragove.jpg",
            imgsm:"./img/dragove.jpg",
            about: "Park prirode Telašćica smješten je na jugoistočnom dijelu Dugog otoka i predstavlja jedno od najvećih prirodnih bogatstava Hrvatske. Ovaj zaštićeni krajolik oduševljava svojom ljepotom, raznolikošću i bogatstvom flore i faune."
        },
        {
            id: 6,
            title: "Brbinj",
            img: "./img/brbinj.jpg",
            imgsm:"./img/brbinj.jpg",
            about: "Svjetionik Veli Rat je jedan od najprepoznatljivijih simbola Dugog otoka. Sa svojih 42 metra visine, on je najviši svjetionik na Jadranu i pravi magnet za turiste. Smješten na sjeverozapadnom dijelu otoka, ovaj impozantni svjetionik pruža spektakularne poglede na okolne otoke i beskrajno plavetnilo mora."
        },
        {
            id: 7,
            title: "Savar",
            img: "./img/savar.jpg",
            imgsm:"./img/savar.jpg",
            about: "Park prirode Telašćica smješten je na jugoistočnom dijelu Dugog otoka i predstavlja jedno od najvećih prirodnih bogatstava Hrvatske. Ovaj zaštićeni krajolik oduševljava svojom ljepotom, raznolikošću i bogatstvom flore i faune."
        },
        {
            id: 8,
            title: "Luka",
            img: "./img/luka.jpg",
            imgsm:"./img/luka.jpg",
            about: "Svjetionik Veli Rat je jedan od najprepoznatljivijih simbola Dugog otoka. Sa svojih 42 metra visine, on je najviši svjetionik na Jadranu i pravi magnet za turiste. Smješten na sjeverozapadnom dijelu otoka, ovaj impozantni svjetionik pruža spektakularne poglede na okolne otoke i beskrajno plavetnilo mora."
        },
        {
            id: 9,
            title: "Žman",
            img: "./img/zman.jpg",
            imgsm:"./img/zman.jpg",
            about: "Park prirode Telašćica smješten je na jugoistočnom dijelu Dugog otoka i predstavlja jedno od najvećih prirodnih bogatstava Hrvatske. Ovaj zaštićeni krajolik oduševljava svojom ljepotom, raznolikošću i bogatstvom flore i faune."
        },
        {
            id: 10,
            title: "Zaglav",
            img: "./img/zaglav.jpg",
            imgsm:"./img/zaglav.jpg",
            about: "Svjetionik Veli Rat je jedan od najprepoznatljivijih simbola Dugog otoka. Sa svojih 42 metra visine, on je najviši svjetionik na Jadranu i pravi magnet za turiste. Smješten na sjeverozapadnom dijelu otoka, ovaj impozantni svjetionik pruža spektakularne poglede na okolne otoke i beskrajno plavetnilo mora."
        },
        {
            id: 11,
            title: "Sali",
            img: "./img/sali.jpg",
            imgsm:"./img/sali.jpg",
            about: "Park prirode Telašćica smješten je na jugoistočnom dijelu Dugog otoka i predstavlja jedno od najvećih prirodnih bogatstava Hrvatske. Ovaj zaštićeni krajolik oduševljava svojom ljepotom, raznolikošću i bogatstvom flore i faune."
        }
    ],
    aktivnosti: [
        {
            id: 12,
            title: "Grapašćak",
            img: "./img/grapascak.jpg",
            imgsm:"./img/grapascaksm.jpg",
            about: "Fort Grapašćak je povijesna tvrđava smještena na otoku Dugom, iznad mjesta Sali. Ova impozantna građevina sagrađena je u 16."
        },
        {
            id: 13,
            title: "Golubinka",
            img: "./img/golubinka.jpg",
            imgsm:"./img/golubinkasm.jpg",
            about: "Špilja Golubinka je jedna od najvećih prirodnih atrakcija Dugog otoka. Smještena u blizini uvale Brbinjšćica, ova špilja privlači sve veći broj turista i avanturista svake godine"
        },
        {
            id: 14,
            title: "Telascica",
            img: "./img/telascica.jpg",
            imgsm:"./img/telascicasm.jpg",
            about: "The beach is particularly popular for windsurfing and kitesurfing due to its ideal wind conditions. Surrounded by pine trees that provide natural shade, Zlatni Rat offers a picturesque setting with crystal-clear turquoise waters. The beach gradually changes its shape, sometimes extending more to one side or the other, which makes it a fascinating geographical feature."
        }
    ],
    plaze: [
        {
            id: 15,
            title: "sakarun",
            img: "./img/sakarun.jpg",
            imgsm:"./img/sakarunsm.jpg",
            about: "Želite li provesti dan na plaži, Sakarun je savršen izbor. Osim kupanja i sunčanja, možete uživati u brojnim aktivnostima poput ronjenja, jedrenja na dasci ili jednostavno šetnje uz obalu. U blizini plaže nalaze se restorani i barovi gdje možete osvježiti se i kušati lokalne specijalitete."
        },
        {
            id: 16,
            title: "veli zal",
            img: "./img/velizal.jpg",
            imgsm:"./img/velizalsm.jpg",
            about: "Veli Žal, iako možda ne tako poznata kao neke druge plaže na Jadranu, predstavlja pravo osvježenje za one koji traže mirnije i manje gužve. Smještena na Dugom otoku, ova plaža nudi posebnu atmosferu i ljepote koje će vas očarati."
        },
        {
            id: 17,
            title: "soline",
            img: "./img/mandarino.jpg",
            imgsm:"./img/mandarinosm.jpg",
            about: "Plaža Soline na Dugom otoku predstavlja pravo osvježenje za sve one koji traže mirnije i manje gužve od popularnih plaža poput Sakaruna. Smještena u uvali Solišćica, ova plaža nudi posebnu atmosferu i ljepote koje će vas očarati."
        }
    ]
}


app.get('/', (req, res)=>{
    res.render('index', {pageData, headerOn: true, show: false});
})

app.get('/places', (req, res)=>{
    res.render('pages/places', {pageData, headerOn: false, show: false})
})
app.get('/plaze', (req, res)=>{
    res.render('pages/plaze', {pageData, headerOn: false, show: false})
})
app.get('/aktivnosti', (req, res)=>{
    res.render('pages/aktivnosti', {pageData, headerOn: false, show: false})
})

app.get('/showPlace/:id', (req, res)=>{
    const {id} = req.params;
    const place = pageData.mjesta.find(item => item.id == id);
    res.render('pages/showPlace', {place, headerOn: false, show: true})
})
app.get('/showPlaza/:id', (req, res)=>{
    const {id} = req.params;
    const plaza = pageData.plaze.find(item => item.id == id);
    res.render('pages/showPlaza', {plaza, headerOn: false, show: true})
})
app.get('/showAktivnost/:id', (req, res)=>{
    const {id} = req.params;
    const aktivnost = pageData.aktivnosti.find(item => item.id == id);
    res.render('pages/showAktivnost', {aktivnost, headerOn: false, show: true})
})

app.get('*', (req, res)=>{
    res.render('error', {headerOn: false, show: false});
})


app.listen(3000, ()=>{
    console.log('Listening on PORT: 3000');
})