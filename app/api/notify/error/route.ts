import { NextRequest } from "next/server";
import { createTransport } from "nodemailer";

export async function POST(request: NextRequest) {
  if (process.env.NODE_ENV === "development") {
    return Response.json({ sent: false });
  }

  const error = await request.json();

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
    to: process.env.MAIL_CONTACT_TO,
    subject: `[svwalddorf.de, ${process.env.NODE_ENV}] Error`,
    text: `Error: ${error}`,
    html: `<p>Error:</p><pre>${JSON.stringify(error, null, " ")}</pre>`,
  });

  console.log("info:", sentMessageInfo);

  return Response.json({ sent: true });
}
