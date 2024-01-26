const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors'); // Importa el paquete cors

const app = express();
const port = 3001; // o el puerto que prefieras

app.use(bodyParser.json());
app.use(cors()); 

// Configura nodemailer con tus credenciales de correo
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '20210643@uthh.edu.mx',
    pass: 'tydh jjmq kzun azde'
  }
});

// Ruta para enviar correos electrónicos
app.post('/send-email', (req, res) => {
  const { to, subject, text } = req.body;

  const mailOptions = {
    from: '20210643@uthh.edu.mx',
    to,
    subject,
    text
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Correo electrónico enviado: ' + info.response);
  });
});

app.listen(port, () => {
  console.log(`Servidor Node.js en ejecución en http://localhost:${port}`);
});
