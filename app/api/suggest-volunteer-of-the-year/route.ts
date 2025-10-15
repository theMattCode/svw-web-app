import { NextRequest } from "next/server";
import { createTransport } from "nodemailer";

export async function POST(request: NextRequest) {
  const formData = await request.formData();

  const suggesterName = formData.get("suggester-name");
  if (!suggesterName) {
    return Response.json({ error: "Name is required", sent: false }, { status: 400 });
  }

  const suggesterEmail = formData.get("suggester-email");
  if (!suggesterEmail) {
    return Response.json({ error: "Email is required", sent: false }, { status: 400 });
  }

  const volunteerName = formData.get("volunteer-name");
  if (!volunteerName) {
    return Response.json({ error: "Name is required", sent: false }, { status: 400 });
  }

  const volunteerWhy = formData.get("volunteer-why");
  if (!volunteerWhy) {
    return Response.json({ error: "Why is required", sent: false }, { status: 400 });
  }

  const transporter = createTransport({
    port: Number.parseInt(process.env.MAIL_CONTACT_PORT ?? "587"),
    host: process.env.MAIL_CONTACT_SMTP,
    auth: {
      user: process.env.MAIL_CONTACT_USER,
      pass: process.env.MAIL_CONTACT_PASS,
    },
    requireTLS: true,
  });

  const sentMessageInfo = await transporter.sendMail({
    from: process.env.MAIL_CONTACT_FROM,
    to: process.env.MAIL_VOLUNTEER_CONTACT_TO,
    subject: `[svwalddorf.de] Neuer Vorschlag für Ehrenamtler des Jahres von ${suggesterName}`,
    text: `${suggesterName} (${suggesterEmail}): ${volunteerName} - ${volunteerWhy}`,
    html: `<p>${suggesterName} (${suggesterEmail}):</p><p>${volunteerName}</p><p>${volunteerWhy}</p>`,
  });

  console.log("info:", sentMessageInfo);

  return Response.json({ sent: true });
}
