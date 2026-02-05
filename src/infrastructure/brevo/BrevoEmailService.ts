import axios from "axios"
import { EmailNotificationPayload, INotification } from "@/domain/services/INotification"

const BREVO_URL = "https://api.brevo.com/v3/smtp/email"

export class BrevoEmailNotificationService implements INotification {
  private readonly apiKey = process.env.BREVO_API_KEY!
  private readonly senderName = process.env.SENDER_NAME!
  private readonly senderEmail = process.env.SENDER_EMAIL!
  private readonly toEmail = process.env.NOTIFICATION_EMAIL_TO!

  public BrevoEmailNotificationService() {}
  async sendMessage(payload: EmailNotificationPayload): Promise<void> {
    if (!this.apiKey || !this.senderEmail || !this.toEmail) return

  const html = this.buildTemplate(payload)

  await axios.post(
    BREVO_URL,
    {
      sender: { name: this.senderName, email: this.senderEmail },
      to: [{ email: this.toEmail }],
      subject: payload.subject,
      htmlContent: html
    },
    {
      headers: {
        "api-key": this.apiKey,
        "Content-Type": "application/json"
      }
    }
  )
  }

  private buildTemplate(payload: EmailNotificationPayload): string {
  switch (payload.type) {
      case "NEW_PAYMENT":
        return this.newPaymentTemplate(payload)
      default:
        return this.genericTemplate(payload)
    }
  }
  private newPaymentTemplate(payload: EmailNotificationPayload): string {
    return `
    <div style="background-color:#f4f6f8;padding:30px 0;font-family:Arial,Helvetica,sans-serif">
      <table width="100%">
        <tr>
          <td align="center">
            <table width="600" style="background:#ffffff;border-radius:8px;box-shadow:0 4px 12px rgba(0,0,0,0.08)">
              
              <tr>
                <td style="background:#0f172a;padding:20px 30px">
                  <h1 style="margin:0;color:#ffffff;font-size:20px">
                    💳 Nuevo pago recibido
                  </h1>
                </td>
              </tr>

              <tr>
                <td style="padding:30px">
                  <p style="color:#334155;font-size:14px;margin-bottom:16px">
                    Se ha recibido un nuevo pago a través de <strong>Mercado Pago</strong>.
                  </p>

                  <table width="100%" style="font-size:14px;border-collapse:collapse">
                    ${this.formatRow("Nombre", payload.message.match(/nombre de persona que paga: (.*)/)?.[1])}
                    ${this.formatRow("Teléfono", payload.message.match(/telefono: (.*)/)?.[1])}
                    ${this.formatRow("Email", payload.message.match(/email: (.*)/)?.[1])}
                    ${this.formatRow("Ciudad", payload.message.match(/ciudad: (.*)/)?.[1])}
                    ${this.formatRow("Dirección", payload.message.match(/direccion: (.*)/)?.[1])}
                    ${this.formatRow("Producto ID", payload.message.match(/producto comprado: (.*)/)?.[1])}
                    ${this.formatRow("Total pagado", payload.message.match(/total pagado: (.*)/)?.[1], true)}
                  </table>
                </td>
              </tr>

              <tr>
                <td style="background:#f1f5f9;padding:16px;text-align:center">
                  <p style="font-size:12px;color:#64748b;margin:0">
                    Notificación automática · Mercado Pago
                  </p>
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>
    </div>
    `
  }
  private genericTemplate(payload: EmailNotificationPayload): string {
    return `
      <div style="font-family:Arial;padding:20px">
        <h2>${payload.subject}</h2>
        <p style="white-space:pre-line">${payload.message}</p>
      </div>
    `
  }

  private formatRow(label: string, value?: string, highlight = false): string {
    if (!value) return ""

    return `
      <tr>
        <td style="padding:8px;border-bottom:1px solid #e2e8f0;color:#64748b">
          ${label}
        </td>
        <td style="padding:8px;border-bottom:1px solid #e2e8f0;
          color:${highlight ? "#16a34a" : "#0f172a"};
          font-weight:${highlight ? "bold" : "normal"}">
          ${value}
        </td>
      </tr>
    `
  }

}
