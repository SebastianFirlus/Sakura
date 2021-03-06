var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var methodOverride = require('method-override');
var cors = require('cors');

//Email Requirements
const nodemailer = require('nodemailer');
const transport = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'sakuraappnotifications@gmail.com',
    pass: '_sakura123',
  },
});
const FromMail = 'sakuraappnotifications@gmail.com';
const TargetMail = 'sakuraappnotifications@gmail.com';
const Subject = 'Reservierung';



var app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(cors());


var news = [
  {id: 1, heading: "Neue Preise", body: "Wir haben unsere Preise aktualisiert!"},
  {id:2, heading: "Neues Gericht: Oktopusbällchen", body: "Wir haben ab sofort auch Oktopusbällchen in unserer Speisekarte!"}
  ];

var actionsM = [
  {id: 1, heading: "Juni Aktion" ,body: "Nur im Juni! Bei 5 vollzahlenden Erwachsenen, isst die 6te Person gratis!"}
];

var actionsW = [
  {id: 1, heading: "KW 43 Aktion" ,body: "Alle 0,5L Softdrinks für nur 3€! Zeigen Sie einfach die App bei der Bestellung vor."}
];

var specials = [
  {id: 1, heading: "Zurzeit haben wir leider keine Specials." ,body: "Schauen Sie einfach später nochmal vorbei :)"}
];

var _reservation = {
  _vorname: null,
  _nachname: null,
  _email: null,
  _number: null,
  _date: null,
  _time: null,
  _persons: null,
  _additional: null
}


//functions
function sendResMail(content){
  transport.sendMail({
    from: FromMail,
    to: TargetMail ,
    subject: Subject,
    html: content,
  }, (error, info) => {
    if (error) {
      console.log(error);
    }
    console.log(`Message sent: ${info.response}`);
  });
}



//Routes
app.post('/sendMail', function (req, res) {
  this._vorname = req.body.vorname;
  this._nachname = req.body.nachname;
  this._email = req.body.email;
  this._number = req.body.number;
  this._date = req.body.date;
  this._time = req.body.time;
  this._persons = req.body.persons;
  this._additional = req.body._additional;
  console.log("it worked")
})

app.get('/sendMail/', function (req, res) {
  console.log(req.body);
  sendResMail(req.query.id);
});

app.get('/news', function (req, res) {
  res.send(news);
});

app.get('/actionofthemonth', function (req, res) {
  res.send(actionsM)
});

app.get('/actionoftheweek', function (req, res) {
  res.send(actionsW)
});

app.get('/specials', function (req, res) {
  res.send(specials)
});


//listen
app.listen(process.env.PORT || 8080);
console.log("App listening on port 8080");
