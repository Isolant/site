const mailgun = require('mailgun-js');

export default async function handler(req, res) {
  const mg = mailgun({
    apiKey: process.env.MAILGUN_API_KEY, 
    domain: process.env.MAILGUN_DOMAIN
  });

  const text = `
    Un usuario completó el formulario de contacto en la página www.isolant.com.ar/nosotros. Tipo: ${req.body.type}. Producto: ${req.body.product}. ${req.body.message && req.body.message !== null ? `Contenido: ${req.body.message}` : ''}
  `;

  const markup = `
    <h1>Un usuario completó el formulario de contacto en la página <a href="https://www.isolant.com.ar/nosotros" rel="noopener noreferrer" target="_blank">Nosotros</a>.</h1>
    <ul>
      <li>
        Tipo: ${req.body.type}
      </li>
      <li>
        Producto: ${req.body.product}
      </li>
      ${req.body.text && req.body.text !== null ? 
        `
        <li>
          Contenido: ${req.body.text}
        </li>
        `
        : ''
      }
    </ul>
  `;

  const data = {
    from: 'Isolant S.A. <noresponder@isolant.com.ar>',
    to: process.env.ADMIN_EMAIL,
    subject: 'Nuevo contacto desde sitio web isolant',
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