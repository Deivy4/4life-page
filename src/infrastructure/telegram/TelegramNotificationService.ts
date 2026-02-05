import { bot } from './TelegramClient'
import { EmailNotificationPayload, INotification } from '../../domain/services/INotification'

export class TelegramNotificationService implements INotification {
  private readonly bot
  private readonly defaultChatId: string | undefined

  constructor() {
    this.bot = bot
    this.defaultChatId = process.env.CHAT_ID_DAVISH
  }

  async sendMessage(input: EmailNotificationPayload): Promise<void> {
    if (!this.defaultChatId) {
      console.warn('Telegram chatId not configured')
      return
    }

    try {
      await this.bot.sendMessage(this.defaultChatId, input.message)
    } catch (error) {
      console.error('Telegram sendMessage failed:', error)
      // ❗ NO throw
    }
  }
}
