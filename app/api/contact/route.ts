import aboutData from "@/config/user-data/about";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, message } = await req.json();
  const emailTo = aboutData.contact.email;

  if (!email) {
    return Response.json({
      success: false,
      message: "Email is required",
      status: 400,
    });
  }

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: emailTo,
      subject: `New message from ${name}`,
      html: `
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Resend error:", error);

    return Response.json(
      { success: false, message: "Failed to send email" },
      { status: 500 },
    );
  }
}
