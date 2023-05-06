const express       = require('express');
const router        = require('./routes/server');
const nodemailer    = require('nodemailer');

const app = express();
app.use(express.json());
app.use(router);

let mailTransporter = nodemailer.createTransport({
    service: "gmail",
    auth:{
        user: "cbsdassignmenttest@gmail.com",
        pass: "dmuszoiogzdbjtys"
    }
})

let mailDetails = {
    from    : "cbsdassignmenttest@gmail.com",
    to      : "m.madurangidesilva@gmail.com",
    subject : "Sending an email using nodemailer in Nodejs",
    text    : "Dear Malshi,\n\nI am writing this mail for an assignment. This is an assignment related to Component based Software Development lesson of Advanced Software Engineering subject. Here I am trying to use node components to send emails.\n\nThank You,\nBest Regards,\nMalshi Madurangi"
}

mailTransporter.sendMail(mailDetails,(err)=>{
    if(err){
        console.log("Sorry, something went wrong!",err);
    }
    else{
        console.log("The email sent successfully!");
    }
})

app.listen(8080, () => console.log('server running on port 8080'));