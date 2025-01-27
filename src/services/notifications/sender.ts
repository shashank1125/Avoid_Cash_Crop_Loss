import twilio from 'twilio';
import { User } from '../../types/user';
import { messages } from './messages';

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

export async function sendSMS(
  user: User,
  messageType: keyof typeof messages[typeof user.language],
  params: any[]
) {
  try {
    const messageTemplate = messages[user.language][messageType];
    const messageText = messageTemplate(...params);

    await client.messages.create({
      body: messageText,
      to: user.phone,
      from: process.env.TWILIO_PHONE_NUMBER
    });
  } catch (error) {
    console.error('Failed to send notification:', error);
    throw new Error('Notification failed');
  }
}