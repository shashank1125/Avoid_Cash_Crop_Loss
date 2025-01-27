import { User } from '../types/user';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

export async function registerUser(userData: Omit<User, 'id' | 'createdAt'>) {
  try {
    const response = await fetch(`${API_URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error('Registration failed');
    }

    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw new Error('Failed to register user');
  }
}