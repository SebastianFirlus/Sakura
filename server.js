var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var methodOverride = require('method-override')
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
const Subject = 'Reservierung'



var app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(cors());

//functions
function sendResMail(content){
  transport.sendMail({
    from: FromMail,
    to: TargetMail ,
    subject: Subject,
    text: content,
  }, (error, info) => {
    if (error) {
      console.log(error);
    }
    console.log(`Message sent: ${info.response}`);
  });
}



//Routes
app.get('/sendMail', function (req, res) {
  sendResMail('Hier steht jetzt mein ganzer Textblablub')
})


//listen
app.listen(process.env.PORT || 8080);
console.log("App listening on port 8080");
