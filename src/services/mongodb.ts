import { MongoClient, Db } from 'mongodb';
import { User } from '../types/user';
import { sendWelcomeSMS } from './notifications/twilio';

const MONGODB_URI = 'mongodb+srv://farmerassist:Outlook123@cluster0.mongodb.net/farmer_friend?retryWrites=true&w=majority';

let db: Db | null = null;

export async function connectDB() {
  if (!db) {
    const client = await MongoClient.connect(MONGODB_URI);
    db = client.db('farmer_friend');
    console.log('Connected to MongoDB Atlas');
  }
  return db;
}

export async function saveUser(user: Omit<User, 'id' | 'createdAt'>) {
  const db = await connectDB();
  
  // Save user to database
  const result = await db.collection('users').insertOne({
    ...user,
    createdAt: new Date()
  });

  // Send welcome SMS in user's preferred language
  await sendWelcomeSMS({
    id: result.insertedId.toString(),
    ...user,
    createdAt: new Date()
  });

  return result.insertedId;
}

export async function getUsersForNotification(currentTime: string) {
  const db = await connectDB();
  return db.collection('users').find({
    notificationTime: currentTime
  }).toArray();
}

// Daily updates for weather and irrigation
export async function saveDailyUpdate(userId: string, data: {
  temperature: number;
  rainfall: number;
  irrigationDuration: number;
  timestamp: Date;
}) {
  const db = await connectDB();
  return db.collection('daily_updates').insertOne({
    userId,
    ...data
  });
}