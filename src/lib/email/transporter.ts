import nodemailer from "nodemailer";

function getEmailConfig() {
  const host = process.env.EMAIL_HOST;
  const port = process.env.EMAIL_PORT;
  const user = process.env.EMAIL_USER;
  const password = process.env.EMAIL_PASSWORD;
  const destination = process.env.DESTINATION_EMAIL;

  if (!host || !port || !user || !password || !destination) {
    throw new Error("Configuration email manquante côté serveur.");
  }

  return {
    host,
    port: Number(port),
    user,
    password,
    destination,
  };
}

export function createTransporter() {
  const config = getEmailConfig();

  return nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.port === 465,
    auth: {
      user: config.user,
      pass: config.password,
    },
  });
}

export function getDestinationEmail() {
  return getEmailConfig().destination;
}
