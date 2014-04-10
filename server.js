var express = require('express'),
    http = require('http'),
    nodemailer = require("nodemailer"),
    smtpTransport = nodemailer.createTransport("SMTP",{
        service: "Zoho",
        auth: {
            user: "hello@270studio.com",
            pass: "cebulahula"
        }
    });

var app = express();

app.use(express.favicon(__dirname + '/dev/favicon.ico'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(__dirname + '/dev', {maxAge: 86400}));
// app.use(app.router);

app.get('/', function (res, req) {
    res.send('index');
});

app.post('/contact', function(req, res) {
    var name = req.body.name,
        email = req.body.email,
        message = req.body.message,
        mailOptions = {
            from: "hello@270studio.com", // sender address
            to: "hello@270studio.com", // list of receivers
            subject: "Message from " + name + " <" + email + ">", // Subject line
            text: message, // plaintext body
            html: message // html body
        }

    smtpTransport.sendMail(mailOptions, function(error, response){
        if(error){
            res.redirect('/error.html');
        }else{
            res.redirect('/thankyou.html');
        }
        // if you don't want to use this transport object anymore, uncomment following line
        //smtpTransport.close(); // shut down the connection pool, no more messages
    });
});

app.use(function (req, res) {
    res.redirect('/');
});

http.createServer(app).listen(process.env.PORT || 3000);