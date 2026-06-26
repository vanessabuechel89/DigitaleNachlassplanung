import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendWelcomeEmail(to: string) {
  return resend.emails.send({
    from: process.env.WELCOME_EMAIL_FROM!,
    to,
    subject: "Willkommen bei Digitale Nachlassplanung",
    html: `
      <p>Hallo,</p>
      <p>vielen Dank für deine Anmeldung bei Digitale Nachlassplanung.</p>
      <p>Wir melden uns in Kürze mit den nächsten Schritten.</p>
    `,
  });
}
