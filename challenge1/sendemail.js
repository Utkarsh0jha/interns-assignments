const nodemailer = require('nodemailer');
const fs = require('fs');


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'utkarshojha234@gmail.com', 
        pass: 'bels jils aope qjuo' 
    }
});


const attachment = {
    filename: 'image.jpeg', 
    path: './image.jpeg', 
    cid: 'unique@nodemailer.com' 
};

const mailOptions = {
    from: 'utkarshojha234@gmail.com', 
    to: 'hr@ignitershub.com',
    subject: 'Challenge 3 Completed',
    html: `
        <p><strong>Your Name:</strong> Utkarsh Ojha</p>
        <p><strong>Semester:</strong> 8</p>
        <p><strong>Branch:</strong> Computer Science</p>
        <p><strong>Roll Number:</strong> 200050101060</p>
        <img src="cid:unique@nodemailer.com">
    `,
    attachments: [attachment]
};


transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error('Error:', error);
    } else {
        console.log('Email sent:', info.response);
    }
});
