
export interface EmailNotificationPayload {
  subject: string
  message: string
  type: "NEW_PAYMENT" | "GENERIC"
}

export interface INotification {
    sendMessage(payload: EmailNotificationPayload): Promise<void>;
}