#!/usr/bin/env node
/**
 * Script de test SMTP pour valider la configuration d'envoi d'emails.
 *
 * Usage (Linux / macOS / PowerShell):
 *  Set the env vars then run:
 *
 *  EMAIL_HOST=... EMAIL_PORT=... EMAIL_USER=... EMAIL_PASSWORD=... DESTINATION_EMAIL=... node frontend/scripts/test-smtp.js
 *
 * On Windows CMD use `set` or configure in your environment.
 */

const nodemailer = require("nodemailer");

const fs = require("fs");
const path = require("path");

function loadEnvFile(envPath) {
  try {
    const content = fs.readFileSync(envPath, "utf8");
    content.split(/\r?\n/).forEach((line) => {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#") || !trimmed.includes("=")) return;
      const idx = trimmed.indexOf("=");
      const key = trimmed.slice(0, idx).trim();
      let val = trimmed.slice(idx + 1).trim();
      if ((val.startsWith("\'") && val.endsWith("\'")) || (val.startsWith('"') && val.endsWith('"'))) {
        val = val.slice(1, -1);
      }
      if (!process.env[key]) process.env[key] = val;
    });
  } catch (err) {
    // ignore
  }
}

// If some env vars are missing, attempt to load .env.local from project root
const requiredKeys = [
  "EMAIL_HOST",
  "EMAIL_PORT",
  "EMAIL_USER",
  "EMAIL_PASSWORD",
  "DESTINATION_EMAIL",
];

const missingBefore = requiredKeys.filter((k) => !process.env[k]);
if (missingBefore.length) {
  // Try frontend/.env.local first, then project root .env.local
  const envPaths = [
    path.resolve(process.cwd(), ".env.local"),
    path.resolve(process.cwd(), "..", ".env.local"),
  ];
  for (const p of envPaths) loadEnvFile(p);
}

const {
  EMAIL_HOST,
  EMAIL_PORT,
  EMAIL_USER,
  EMAIL_PASSWORD,
  DESTINATION_EMAIL,
} = process.env;

const missing = [];
if (!EMAIL_HOST) missing.push("EMAIL_HOST");
if (!EMAIL_PORT) missing.push("EMAIL_PORT");
if (!EMAIL_USER) missing.push("EMAIL_USER");
if (!EMAIL_PASSWORD) missing.push("EMAIL_PASSWORD");
if (!DESTINATION_EMAIL) missing.push("DESTINATION_EMAIL");

if (missing.length) {
  console.error("Variables d'environnement manquantes:", missing.join(", "));
  console.error("Placez-les dans .env.local à la racine du projet ou exportez-les avant d'exécuter le script.");
  process.exit(1);
}

const port = Number(EMAIL_PORT);

const transporter = nodemailer.createTransport({
  host: EMAIL_HOST,
  port,
  secure: port === 465,
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASSWORD,
  },
  tls: { rejectUnauthorized: false },
});

async function run() {
  try {
    console.log("Vérification du transporteur SMTP...");
    await transporter.verify();
    console.log("Connexion SMTP OK — envoi d'un message de test...");

    const info = await transporter.sendMail({
      from: `"Test Cartes" <${EMAIL_USER}>`,
      to: DESTINATION_EMAIL,
      subject: "Test SMTP — Cartes",
      text: "Ce message confirme la configuration SMTP.",
    });

    console.log("Message envoyé:", info.messageId || info.response);
    process.exit(0);
  } catch (err) {
    console.error("Erreur SMTP:", err);
    process.exit(1);
  }
}

run();
