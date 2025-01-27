// Client-side notification service
export async function checkNotificationStatus(userId: string) {
  try {
    const response = await fetch(`/api/notifications/status/${userId}`);
    return await response.json();
  } catch (error) {
    console.error('Failed to check notification status:', error);
    return null;
  }
}

export async function updateNotificationPreferences(
  userId: string, 
  preferences: {
    language: string;
    notificationTime: string;
  }
) {
  try {
    const response = await fetch(`/api/notifications/preferences/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(preferences),
    });
    return await response.json();
  } catch (error) {
    console.error('Failed to update preferences:', error);
    throw new Error('Failed to update notification preferences');
  }
}