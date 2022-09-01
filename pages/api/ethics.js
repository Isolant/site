const mailgun = require('mailgun-js');

export default async function handler(req, res) {
  const mg = mailgun({
    apiKey: process.env.MAILGUN_API_KEY, 
    domain: process.env.MAILGUN_DOMAIN
  });

  const text = `
    Un usuario completó el formulario de ética e integridad. Contenido: ${req.body.message}.
  `;

  const markup = `
    <h1>Un usuario completó el formulario de ética e integridad.</h1>
    <ul>
      <li>
        Contenido: ${req.body.message}
      </li>
    </ul>
  `;

  const data = {
    from: 'Isolant S.A. <noresponder@isolant.com.ar>',
    to: process.env.ETHICS_EMAIL,
    subject: 'Un usuario completó el formulario de ética e integridad',
    text,
    html: markup
  };

   await mg.messages().send(data, (error, body) => {
    if (error) {
      return console.log(error);
    }
   });

   res.redirect(307, '/api/gracias');
}