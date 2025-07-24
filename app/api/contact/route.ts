import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_KEY!);

export async function POST(req: Request) {
    try {
        const { name, email, projectType, description } = await req.json();
        console.log({ name, email, projectType, description });


        // ✅ Mail vers TOI
        const msgToYou = {
            to: "edwin.d899@gmail.com",
            from: "edwin.d899@gmail.com",
            replyTo: email,
            subject: `📩 Prise de contact de ${name} pour un projet : ${projectType}`,
            text: `Nom : ${name}\nEmail : ${email}\nType de projet : ${projectType}\n\nDescription :\n${description}`,
        };

        // ✅ Mail de confirmation vers L'UTILISATEUR
        const msgToUser = {
            to: email,
            from: "edwin.d899@gmail.com",
            subject: "✅ Confirmation de votre message à TrimioEdit",
            text: `Bonjour ${name},\n\nMerci pour votre prise de contact ! Voici un récapitulatif de votre message :\n\nType de projet : ${projectType}\n\nDescription :\n${description}\n\nNous vous répondrons dans les plus brefs délais.\n\n— L’équipe TrimioEdit`,
            html: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333; background-color: #f9f9f9; border-radius: 8px;">
      <h2 style="color: #4caf50;">Merci pour votre message, ${name} !</h2>
      <p>Nous avons bien reçu votre demande. Voici un récapitulatif de ce que vous nous avez envoyé :</p>

      <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />

      <p><strong>📂 Type de projet :</strong><br/>${projectType}</p>
      <p><strong>📝 Description :</strong><br/>${description.replace(/\n/g, "<br/>")}</p>

      <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />

      <p>Nous vous répondrons dans les plus brefs délais.<br/>
      Merci encore pour votre confiance !</p>

      <p style="margin-top: 30px;">— L’équipe <strong>TrimioEdit</strong></p>
    </div>
  `,
        };

        // Envoie les deux mails en parallèle
        await Promise.all([
            sgMail.send(msgToYou),
            sgMail.send(msgToUser),
        ]);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: "Une erreur est survenue lors de l'envoi du message." },
            { status: 500 }
        );
    }
}
