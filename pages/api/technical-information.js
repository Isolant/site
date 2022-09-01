const mailgun = require('mailgun-js');

export default async function handler(req, res) {
  const mg = mailgun({
    apiKey: process.env.MAILGUN_API_KEY, 
    domain: process.env.MAILGUN_DOMAIN
  });

  const text = `
    Un usuario completó el formulario de consultas técnicas en la página www.isolant.com.ar/servicios/descargas. Nombre: ${req.body.name}. Aislante: ${req.body.product}. Tipo: ${req.body.type}. ${req.body.other && req.body.other !== null ? `Contenido: ${req.body.other}` : ''}
  `;

  const markup = `
    <h1>Un usuario completó el formulario de consultas técnicas en la página <a href="https://www.isolant.com.ar/servicios/descargas" rel="noopener noreferrer" target="_blank">Nosotros</a>.</h1>
    <ul>
      <li>
        Nombre: ${req.body.name}
      </li>
      <li>
        Aislante: ${req.body.product}
      </li>
      <li>
        Tipo: ${req.body.type}
      </li>
      ${req.body.other && req.body.other !== null ? 
        `
        <li>
          Contenido: ${req.body.other}
        </li>
        `
        : ''
      }
    </ul>
  `;

  const data = {
    from: 'Isolant S.A. <noresponder@isolant.com.ar>',
    to: process.env.ADMIN_EMAIL,
    subject: 'Nueva consulta técnica desde sitio web isolant',
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