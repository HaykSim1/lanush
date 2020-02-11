const nodemailer = require('nodemailer');
const dayjs = require('dayjs');
const ical = require('ical-generator');

class Mailer {
  constructor() {
    this.cal = ical({
      domain: 'http://lanushmuenchen.de/',
      name: 'Invitation',
      timezone: 'Europe/Berlin'
    });

    this.transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 587,
      secure: false, // use TLS
      auth: {
        user: "info@lanushmuenchen.de",
        pass: "lanush2019"
      }
    });
  }

  createEvent = ({ startDate, endDate, service }) => {
    this.cal.createEvent({
      start: startDate.toDate(),
      end: endDate.toDate(),
      timestamp: startDate.toDate(),
      summary: service,
      organizer: 'La Nush | Laser & Beauty center <info@lanushmuenchen.de>'
    });
  };

  createHtml = ({ startDate, service, worker, text, footerText }) => {
    let html = `
      <pre class="x_m_-3189426199756968977description">${text}</pre>
      <ol style="list-style: none; font-size: 14px; line-height: 32px; font-weight: bold;">
        <li style="list-style-type: none;">
          <ol style="list-style: none; font-size: 14px; line-height: 32px; font-weight: bold;">
              <li style="clear: both; border-top: 2px #f5f5f5 solid; width: 550px;">
                  <img style="float: left; padding: 10px;" src="https://email-assets.shore.com/when_calendar.png" alt="interactive connection" width="45" />
                  Wann: ${startDate.format('MMM DD YYYY HH:mm')}
              </li>
              <li style="clear: both; border-top: 2px #f5f5f5 solid; width: 550px;">
                  <img style="float: left; padding: 10px;" src="https://email-assets.shore.com/where_location.png" alt="interactive connection" width="45" />
                  Wo: La'Nush Laser&amp;BeautyCenter (Westendstraße 151, 80339 München)
              </li>
              <li style="clear: both; border-top: 2px #f5f5f5 solid; width: 550px;">
                  <img style="float: left; padding: 10px;" src="https://email-assets.shore.com/what_tick.png" alt="interactive connection" width="45" />
                  Was: ${service}
              </li>
              <li style="clear: both; border-top: 2px #f5f5f5 solid; width: 450px; border-bottom: 2px #f5f5f5 solid;">
                  <img style="float: left; padding: 10px;" src="https://email-assets.shore.com/with_user_01.png" alt="interactive connection" width="45" />
                  Was: ${worker}
              </li>
          </ol>
        </li>
      </ol>
    `;

    if (footerText) {
      html += `
      ${footerText}
      <ol style="list-style: none; font-size: 14px; line-height: 32px; font-weight: bold;">
        <li>
          <a href="https://lanushmuenchen.de/termin-buchen/">
            <button style="height: 47px; width: 137px; background-color: #00d0be; color: #fff; font-size: 17px;" type="button">
              Neuer Termin
            </button>
          </a><
        </li>
      </ol>
      `;
    }

    return html;
  };

  contactEmail = ({ name, email, phone, note }) => {
    this.transporter.sendMail({
      from: "From lanushmuenchen website <info@lanushmuenchen.de>",
      to: "info@lanushmuenchen.de",
      subject: 'Contact form email',
      html: `
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Phone:</b> ${phone}</p>
      <p><b>Note:</b> ${note}</p>
      `,
    })
  };

  sendEmail = async ({ to, startDate, endDate, worker, service, text, footerText }, sendCalendar = true) => {
    sendCalendar && this.createEvent({ startDate, endDate, service });
    const message = {
      from: "La'Nush Laser&BeautyCenter <info@lanushmuenchen.de>",
      to,
      subject: `Terminerinnerung: La'Nush Laser&BeautyCenter - ${startDate.format('MMM DD YYYY HH:mm')} um ${endDate.format('MMM DD YYYY HH:mm')}`,
      text: "Lieber Kunde, hiermit möchten wir Sie an Ihren Termin bei uns La'Nush erinnern",
      html: this.createHtml({ startDate, service, worker, text, footerText }),
      icalEvent: sendCalendar ? {
        method: 'request',
        content: this.cal.toString(),
      } : null
    };

    await this.transporter.sendMail(message);
  }
}

const mailer = new Mailer();
// const startDate = dayjs().add(1, 'day');
// const endDate = dayjs().add(1, 'day').add(2, 'hour');
// mailer.sendEmail({ to: 'hayksim1@gmail.com', startDate, endDate, service: 'Epilcation/ Madal mudul', worker: 'Lusine Chakhalyan' });

module.exports = mailer;
