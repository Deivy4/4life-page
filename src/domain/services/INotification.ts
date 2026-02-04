export interface INotification {
    sendMessage(message: string): Promise<void>;
}