import axios from "axios"
import { INotification } from "@/domain/services/INotification"

const BREVO_URL = "https://api.brevo.com/v3/smtp/email"

export class BrevoEmailNotificationService implements INotification {
  private readonly apiKey = process.env.BREVO_API_KEY!
  private readonly senderName = process.env.SENDER_NAME!
  private readonly senderEmail = process.env.SENDER_EMAIL!
  private readonly toEmail = process.env.NOTIFICATION_EMAIL_TO!

  public BrevoEmailNotificationService() {}
  async sendMessage(message: string): Promise<void> {
    if (!this.apiKey || !this.senderEmail || !this.toEmail) {
      console.warn("Brevo email config missing, skipping notification")
      return
    }

    try {
      await axios.post(
        BREVO_URL,
        {
          sender: {
            name: this.senderName,
            email: this.senderEmail
          },
          to: [{ email: this.toEmail }],
          subject: "Notificación del sistema",
          htmlContent: `
            <div style="font-family: Arial, sans-serif">
              <p>${message}</p>
            </div>
          `,
          charset: "utf-8"
        },
        {
          headers: {
            "api-key": this.apiKey,
            "Content-Type": "application/json"
          },
          timeout: 5000
        }
      )
    } catch (error) {
        console.error("Error sending Brevo email:", error)
      console.error("Brevo email failed, skipping notification")
    }
  }
}
