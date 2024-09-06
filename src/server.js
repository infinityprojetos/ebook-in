const express = require('express');
const bodyParser = require('body-parser');
const { google } = require('googleapis');
const nodemailer = require('nodemailer');

const app = express();
app.use(bodyParser.json());

const sheets = google.sheets('v4');
const credentials = require('./credentials.json'); // Suas credenciais do Google API

// Função para inserir dados na planilha
async function appendToSheet(data) {
  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const client = await auth.getClient();

  const spreadsheetId = '1I75ojNeasHQIlUjKmMn_cm_v8IL5f3woXAQsxGZhgRc'; // Corrigido o ID da planilha

  await sheets.spreadsheets.values.append({
    auth: client,
    spreadsheetId,
    range: 'Sheet1!A1:D1', // Ajuste o range conforme a necessidade
    
    valueInputOption: 'RAW',
    resource: {
      values: [[data.name, data.cpf, data.whatsapp, data.email, data.contactLocation]],
    },
  });
}

// Função para enviar e-mail com o eBook
async function sendEbook(email) {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'seu_email@gmail.com',
      pass: 'sua_senha',
    },
  });

  await transporter.sendMail({
    from: '"Sua Empresa" <seu_email@gmail.com>',
    to: email,
    subject: 'Seu eBook',
    text: 'Obrigado por se inscrever! Aqui está seu eBook.',
    attachments: [
      {
        filename: 'ebook.pdf',
        path: './path/para/ebook.pdf',
      },
    ],
  });
}

// Rota para processar o envio do formulário
app.post('/api/submit', async (req, res) => {
  try {
    const data = req.body;
    await appendToSheet(data);
    await sendEbook(data.email);
    res.status(200).send('Dados recebidos com sucesso!');
  } catch (error) {
    console.error('Erro ao processar a solicitação:', error);
    res.status(500).send('Erro ao processar a solicitação.');
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
