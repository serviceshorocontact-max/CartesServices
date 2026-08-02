import { createTransporter, getDestinationEmail } from "@/lib/email/transporter";
import type { ContactFormSchema } from "@/lib/validations/form-schema";

interface SendContactEmailParams extends ContactFormSchema {
  image?: File | null;
}

export async function sendContactEmail({
  name,
  email,
  phone,
  message,
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
    subject: `Nouvelle demande de vérification — ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1a1a2e; border-bottom: 2px solid #c9a227; padding-bottom: 12px;">
          Nouvelle demande de vérification
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
            <td style="padding: 10px 0; font-weight: bold; color: #555;">Téléphone</td>
            <td style="padding: 10px 0;">${escapeHtml(phone)}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-weight: bold; color: #555; vertical-align: top;">Message</td>
            <td style="padding: 10px 0; white-space: pre-wrap;">${escapeHtml(message)}</td>
          </tr>
        </table>
        ${image ? `<p style="margin-top: 20px; color: #555;">Image jointe : ${escapeHtml(image.name)}</p>` : ""}
      </div>
    `,
    attachments,
  });
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
