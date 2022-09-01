const mailgun = require('mailgun-js');

export default async function handler(req, res) {
  const mg = mailgun({
    apiKey: process.env.MAILGUN_API_KEY, 
    domain: process.env.MAILGUN_DOMAIN
  });

  const phone = `549${req.body.areaCode}${req.body.phone}`;

  const text = `
    Un usuario completó el formulario de contacto en la página www.isolant.com.ar/contacto. Tipo: ${req.body.type}. Nombre: ${req.body.name}. Email: ${req.body.email}. Teléfono: ${req.body.phone}. Provincia: ${req.body.province}. Localidad: ${req.body.locale}. ${req.body.product && req.body.product !== "Elegí una opción del menú" ? `Aislante: ${req.body.product}.` : ''} ${req.body.profession && req.body.profession !== "Elegí una opción del menú" ? `Profesión: ${req.body.profession}.` : ''} ${req.body.m2 && req.body.m2 !== "" ? `M2 de la obra: ${req.body.m2}.` : '' } ${req.body.companyName && req.body.companyName !== "" ? `Razón social de la empresa: ${req.body.companyName}.` : ''}${req.body.companyRole && req.body.companyRole !== "Elegí una opción del menú" ? `Rubro de la empresa: ${req.body.companyRole}.` : ''} ${req.body.companyCuit && req.body.companyCuit !== "" ? `CUIT de la empresa: ${req.body.companyCuit}.` : ''} ${req.body.catalogue && req.body.catalogue !== "Elegí una opción del menú" ? `Catálogo a solicitar: ${req.body.catalogue}.` : ''} ${req.body.address && req.body.address !== "" ? `Dirección: ${req.body.address}.` : ''} Mensaje: ${req.body.message}.
  `;

  const markup = `
    <h1>Un usuario completó el formulario de contacto en la página <a href="https://www.isolant.com.ar/contacto" rel="noopener noreferrer" target="_blank">Contacto</a>.</h1>
    <ul>
      <li>
        Tipo: ${req.body.type}
      </li>
      <li>
        Nombre: ${req.body.name}
      </li>
      <li>
        Email: ${req.body.email}
      </li>
      <li>
        Teléfono: <a href="https://wa.me/${phone}" target="_blank" rel="noopener noreferrer">+${phone}</a>
      </li>
      <li>
        Provincia: ${req.body.province}
      </li>
      <li>
        Localidad: ${req.body.locale}
      </li>
      ${req.body.product && req.body.product !== "Elegí una opción del menú" ? 
        `
        <li>
          Aislante: ${req.body.product}
        </li>
        `
        : ''
      }
      ${req.body.profession && req.body.profession !== "Elegí una opción del menú" ? 
        `
        <li>
          Profesión: ${req.body.profession}
        </li>
        `
        : ''
      }
      ${req.body.m2 && req.body.m2 !== "" ? 
        `
        <li>
          M2 de la obra: ${req.body.m2}
        </li>
        `
        : ''
      }
      ${req.body.companyName && req.body.companyName !== "" ? 
        `
        <li>
          Razón social de la empresa: ${req.body.companyName}
        </li>
        `
        : ''
      }
      ${req.body.companyRole && req.body.companyRole !== "Elegí una opción del menú" ? 
        `
        <li>
          Rubro de la empresa: ${req.body.companyRole}
        </li>
        `
        : ''
      }
      ${req.body.companyCuit && req.body.companyCuit !== "" ? 
        `
        <li>
          CUIT de la empresa: ${req.body.companyCuit}
        </li>
        `
        : ''
      }
      ${req.body.catalogue && req.body.catalogue !== "Elegí una opción del menú" ? 
        `
        <li>
          Catálogo a solicitar: ${req.body.catalogue}
        </li>
        `
        : ''
      }
      ${req.body.address && req.body.address !== "" ? 
        `
        <li>
          Dirección: ${req.body.address}
        </li>
        `
        : ''
      }
      <li>
        Mensaje: ${req.body.message}
      </li>
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