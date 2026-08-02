import { createTransporter, getDestinationEmail } from "@/lib/email/transporter";
import type {
  ContactFormSchema,
  ActivateFormSchema,
  SellFormSchema,
} from "@/lib/validations/form-schema";

interface SendContactEmailParams extends ContactFormSchema {
  image?: File | null;
}

interface SendActivateEmailParams extends ActivateFormSchema {
  image?: File | null;
}

interface SendSellEmailParams extends SellFormSchema {
  image?: File | null;
}

export async function sendContactEmail({
  name,
  email,
  code,
  ticketCode,
  image,
}: SendContactEmailParams): Promise<void> {
  const transporter = createTransporter();
  const destination = getDestinationEmail();

  const attachments = image
    ? [
        {
          filename: image.name,
          content: Buffer.from(await image.arrayBuffer()),
          contentType: image.type,
        },
      ]
    : [];

  await transporter.sendMail({
    from: `"Cartes Vérification" <${process.env.EMAIL_USER}>`,
    to: destination,
    replyTo: email,
    subject: `Nouvelle demande d'authentification — ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1a1a2e; border-bottom: 2px solid #c9a227; padding-bottom: 12px;">
          Nouvelle demande d'authentification
        </h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr>
            <td style="padding: 10px 0; font-weight: bold; color: #555;">Nom</td>
            <td style="padding: 10px 0;">${escapeHtml(name)}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-weight: bold; color: #555;">Email</td>
            <td style="padding: 10px 0;">${escapeHtml(email)}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-weight: bold; color: #555;">Code</td>
            <td style="padding: 10px 0;">${escapeHtml(code)}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-weight: bold; color: #555;">Ticket code</td>
            <td style="padding: 10px 0;">${escapeHtml(ticketCode)}</td>
          </tr>
        </table>
        ${image ? `<p style="margin-top: 20px; color: #555;">Image jointe : ${escapeHtml(image.name)}</p>` : ""}
      </div>
    `,
    attachments,
  });
}

export async function sendActivateEmail({
  firstName,
  lastName,
  phone,
  email,
  cardType,
  cardCode,
  image,
}: SendActivateEmailParams): Promise<void> {
  const transporter = createTransporter();
  const destination = getDestinationEmail();

  const attachments = image
    ? [
        {
          filename: image.name,
          content: Buffer.from(await image.arrayBuffer()),
          contentType: image.type,
        },
      ]
    : [];

  await transporter.sendMail({
    from: `"Cartes Vérification" <${process.env.EMAIL_USER}>`,
    to: destination,
    replyTo: email,
    subject: `Demande d'activation de carte ${cardType} — ${firstName} ${lastName}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1a1a2e; border-bottom: 2px solid #c9a227; padding-bottom: 12px;">
          Demande d'activation de carte
        </h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr>
            <td style="padding: 10px 0; font-weight: bold; color: #555;">Prénom</td>
            <td style="padding: 10px 0;">${escapeHtml(firstName)}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-weight: bold; color: #555;">Nom</td>
            <td style="padding: 10px 0;">${escapeHtml(lastName)}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-weight: bold; color: #555;">Téléphone</td>
            <td style="padding: 10px 0;">${escapeHtml(phone)}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-weight: bold; color: #555;">Email</td>
            <td style="padding: 10px 0;">${escapeHtml(email)}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-weight: bold; color: #555;">Type de carte</td>
            <td style="padding: 10px 0;">${escapeHtml(cardType)}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-weight: bold; color: #555;">Code de la carte</td>
            <td style="padding: 10px 0;">${escapeHtml(cardCode)}</td>
          </tr>
        </table>
        ${image ? `<p style="margin-top: 20px; color: #555;">Justificatif joint : ${escapeHtml(image.name)}</p>` : ""}
      </div>
    `,
    attachments,
  });
}

export async function sendSellEmail({
  firstName,
  lastName,
  phone,
  email,
  cardType,
  cardCode,
  amount,
  currency,
  image,
}: SendSellEmailParams): Promise<void> {
  const transporter = createTransporter();
  const destination = getDestinationEmail();

  const attachments = image
    ? [
        {
          filename: image.name,
          content: Buffer.from(await image.arrayBuffer()),
          contentType: image.type,
        },
      ]
    : [];

  await transporter.sendMail({
    from: `"Cartes Vérification" <${process.env.EMAIL_USER}>`,
    to: destination,
    replyTo: email,
    subject: `Demande de revente de carte ${cardType} — ${firstName} ${lastName}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1a1a2e; border-bottom: 2px solid #c9a227; padding-bottom: 12px;">
          Demande de revente de carte
        </h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr>
            <td style="padding: 10px 0; font-weight: bold; color: #555;">Prénom</td>
            <td style="padding: 10px 0;">${escapeHtml(firstName)}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-weight: bold; color: #555;">Nom</td>
            <td style="padding: 10px 0;">${escapeHtml(lastName)}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-weight: bold; color: #555;">Téléphone</td>
            <td style="padding: 10px 0;">${escapeHtml(phone)}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-weight: bold; color: #555;">Email</td>
            <td style="padding: 10px 0;">${escapeHtml(email)}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-weight: bold; color: #555;">Type de carte</td>
            <td style="padding: 10px 0;">${escapeHtml(cardType)}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-weight: bold; color: #555;">Code de la carte</td>
            <td style="padding: 10px 0;">${escapeHtml(cardCode)}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-weight: bold; color: #555;">Montant</td>
            <td style="padding: 10px 0;">${escapeHtml(amount)} ${escapeHtml(currency)}</td>
          </tr>
        </table>
        ${image ? `<p style="margin-top: 20px; color: #555;">Justificatif joint : ${escapeHtml(image.name)}</p>` : ""}
      </div>
    `,
    attachments,
  });
}

function escapeHtml(text: string): string {
  const amp = "&" + "amp;";
  const lt = "&" + "lt;";
  const gt = "&" + "gt;";
  const quot = "&" + "quot;";
  const apos = "&#" + "039;";
  return text
    .replace(/&/g, amp)
    .replace(/</g, lt)
    .replace(/>/g, gt)
    .replace(/"/g, quot)
    .replace(/'/g, apos);
}

