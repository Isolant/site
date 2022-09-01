const mailgun = require('mailgun-js');

export default async function handler(req, res) {
  const mg = mailgun({
    apiKey: process.env.MAILGUN_API_KEY, 
    domain: process.env.MAILGUN_DOMAIN
  });

  const phone = `549${req.body.areaCode}${req.body.phone}`;

  const text = `
    Un usuario completó el formulario selector de producto. Necesito aislar el: ${req.body.type}. De mi: ${req.body.category}. Tipología constructiva: ${req.body.typology}. m2 aproximados: ${req.body.m2}. Teléfono: +${phone}.
  `;

  const markup = `
    <h1>Un usuario completó el formulario selector de producto.</h1>
    <ul>
      <li>
        Necesito aislar el: ${req.body.type}
      </li>
      <li>
        De mi: ${req.body.category}
      </li>
      <li>
        Tipología constructiva: ${req.body.typology}
      </li>
      <li>
        m2 aproximados: ${req.body.m2}
      </li>
      <li>
        Teléfono: <a href="https://wa.me/${phone}" target="_blank" rel="noopener noreferrer">+${phone}</a>
      </li>
    </ul>
  `;

  const data = {
    from: 'Isolant S.A. <noresponder@isolant.com.ar>',
    to: process.env.ADMIN_EMAIL,
    subject: 'Un usuario completó el formulario selector de producto',
    text,
    html: markup
  };

   await mg.messages().send(data, (error, body) => {
    if (error) {
      return console.log(error);
    }
   });

   if(req.body.type === 'Otro') {
     res.redirect(307, '/api/contacto');
   } else {
     res.redirect(307, '/api/selector-de-producto/resultado');
   }
}