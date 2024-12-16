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
            about: "Veli Rat je živopisno mjesto smješteno na sjeverozapadnom dijelu Dugog otoka, u uvali Čuna koju uski kanal spaja sa zaljevom Pantera. Ovo mjesto, s bogatom poviješću koja seže u rimsko doba, danas je popularna turistička destinacija, poznata po svom mirnom ambijentu, prekrasnim plažama i svjetski poznatom svjetioniku."
        },
        {
            id: 2,
            title: "Verunić",
            img: "./img/verunic.jpg",
            imgsm:"./img/verunic.jpg",
            about: "Verunić, smješten u uvali Čuna na sjeverozapadnom dijelu Dugog otoka, predstavlja oazu mira i spokoja. Ovo malo mjesto, često zvano Verona, nudi jedinstven spoj povijesti, prirode i gastronomije."
        },
        {
            id: 3,
            title: "Soline",
            img: "./img/soline.jpg",
            imgsm:"./img/soline.jpg",
            about: "Soline je malo, ali šarmantno mjesto smješteno na sjeverozapadnom dijelu Dugog otoka, u uvali Solišćica. Njegovo ime upućuje na dugu povijest proizvodnje soli, koja je nekada bila važan dio života ovog područja. Danas, Soline nude miran i opuštajući odmor, idealan za one koji traže bijeg od gradske vreve."
        },
        {
            id: 4,
            title: "Božava",
            img: "./img/bozava.jpg",
            imgsm:"./img/bozava.jpg",
            about: "Božava je prekrasno mjesto smješteno na sjeverozapadnoj strani Dugog otoka, okruženo borovom šumom i kristalno čistim morem. Poznata je po svojoj mirnoj atmosferi, prekrasnim plažama i bogatoj povijesti."
        },
        {
            id: 5,
            title: "Dragove",
            img: "./img/dragove.jpg",
            imgsm:"./img/dragove.jpg",
            about: "Dragove - Skriveni raj na Dugom otoku. Dragove je malo, mirno mjesto smješteno na sjeverozapadnom dijelu Dugog otoka, poznato po svojoj prekrasnoj plaži Veli žal koja se često naziva Hrvatskim Maldivima. Ovo mjesto je idealno za one koji traže miran odmor u okruženju netaknute prirode."
        },
        {
            id: 6,
            title: "Brbinj",
            img: "./img/brbinj.jpg",
            imgsm:"./img/brbinj.jpg",
            about: "Brbinj je živahno mjesto smješteno na sjeveroistočnoj obali Dugog otoka. Kao jedno od većih naselja na otoku,"
        },
        {
            id: 7,
            title: "Savar",
            img: "./img/savar.jpg",
            imgsm:"./img/savar.jpg",
            about: "Savar je malo, šarmantno mjesto smješteno u središnjem dijelu Dugog otoka. Poznato je po svojoj mirnoj atmosferi, prekrasnim plažama i bogatoj povijesti. Za razliku od nekih turistički razvijenijih mjesta na otoku, Savar je zadržao svoj autentični šarm i privlači posjetitelje koji traže miran odmor u okruženju netaknute prirode."
        },
        {
            id: 8,
            title: "Luka",
            img: "./img/luka.jpg",
            imgsm:"./img/luka.jpg",
            about: "Luka je prekrasno mjesto smješteno u središnjem dijelu Dugog otoka, poznato po svojoj mirnoj atmosferi, kristalno čistom moru i bogatoj povijesti. Za razliku od nekih turistički razvijenijih mjesta na otoku,"
        },
        {
            id: 9,
            title: "Žman",
            img: "./img/zman.jpg",
            imgsm:"./img/zman.jpg",
            about: "Žman je malo, tradicionalno dalmatinsko mjesto smješteno na sjeverozapadnom dijelu Dugog otoka. Poznato je po svojoj mirnoj atmosferi, prekrasnim plažama i bogatoj povijesti. Za razliku od nekih turistički razvijenijih mjesta na otoku, Žman je zadržao svoj autentični šarm i privlači posjetitelje koji traže miran odmor u okruženju netaknute prirode."
        },
        {
            id: 10,
            title: "Zaglav",
            img: "./img/zaglav.jpg",
            imgsm:"./img/zaglav.jpg",
            about: "Zaglav je malo, mirno mjesto smješteno na sjevernoj strani Dugog otoka, poznato po svojim prekrasnim plažama i kristalno čistom moru. Za razliku od živahnijeg Salija, Zaglav nudi opušteniji odmor u okruženju netaknute prirode."
        },
        {
            id: 11,
            title: "Sali",
            img: "./img/sali.jpg",
            imgsm:"./img/sali.jpg",
            about: "Sali je najveće mjesto na Dugom otoku i njegovo administrativno središte. Smješteno na sjeveroistočnoj obali otoka, Sali je omiljeno odredište za brojne turiste koji žele upoznati ljepote Dugog otoka i njegove okolice."
        }
    ],
    aktivnosti: [
        {
            id: 12,
            title: "Grapašćak",
            img: "./img/grapascak.jpg",
            imgsm:"./img/grapascaksm.jpg",
            about: "Fort Grapašćak je povijesna tvrđava smještena na otoku Dugom, iznad mjesta Sali. Ova impozantna građevina sagrađena je u 16. Edukativni Centar nudi interaktivne izložbe, edukativne programe i panoramske terase, koje omogućuju posjetiteljima da na zanimljiv način istraže prirodne ljepote ovog područja."
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
            title: "Telašćica",
            img: "./img/telascica.jpg",
            imgsm:"./img/telascicasm.jpg",
            about: "Park prirode Telašćica je jedno od najljepših i najočuvanijih područja hrvatskog Jadrana. Smješten na jugoistočnom dijelu Dugog otoka, ovaj park oduševljava svojom raznolikošću: od strmih klisura i uvala s tirkiznim morem do slanog jezera i bogatog biljnog i životinjskog svijeta."
        }
    ],
    plaze: [
        {
            id: 15,
            title: "Sakarun",
            img: "./img/sakarun.jpg",
            imgsm:"./img/sakarunsm.jpg",
            about: "Želite li provesti dan na plaži, Sakarun je savršen izbor. Osim kupanja i sunčanja, možete uživati u brojnim aktivnostima poput ronjenja, jedrenja na dasci ili jednostavno šetnje uz obalu. U blizini plaže nalaze se restorani i barovi gdje možete osvježiti se i kušati lokalne specijalitete."
        },
        {
            id: 16,
            title: "Veli Žal",
            img: "./img/velizal.jpg",
            imgsm:"./img/velizalsm.jpg",
            about: "Veli Žal, iako možda ne tako poznata kao neke druge plaže na Jadranu, predstavlja pravo osvježenje za one koji traže mirnije i manje gužve. Smještena na Dugom otoku, ova plaža nudi posebnu atmosferu i ljepote koje će vas očarati."
        },
        {
            id: 17,
            title: "Kamp Mandarino",
            img: "./img/mandarino.jpg",
            imgsm:"./img/mandarinosm.jpg",
            about: "Kamp Mandarino na Dugom otoku predstavlja pravo osvježenje za sve one koji traže mirnije i manje gužve od popularnih plaža poput Sakaruna. Smještena u uvali Solišćica, ova plaža nudi posebnu atmosferu i ljepote koje će vas očarati."
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