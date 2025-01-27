import { getUsersForNotification } from '../mongodb';
import { sendDailyUpdate } from './twilio';

export async function scheduleNotifications() {
  try {
    // Get current time in HH:mm format
    const now = new Date();
    const currentTime = `${now.getHours().toString().padStart(2, '0')}:${
      now.getMinutes().toString().padStart(2, '0')}`;

    // Get users scheduled for current time
    const users = await getUsersForNotification(currentTime);

    // Send notifications to each user
    for (const user of users) {
      await sendDailyUpdate(user);
    }
  } catch (error) {
    console.error('Failed to schedule notifications:', error);
  }
}