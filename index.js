import { Db } from 'mongodb';
import mongoose from 'mongoose';

const url = 'mongodb+srv://riju:riju21@cluster1.doybfcn.mongodb.net/';

const connectToDatabase = async () => {
  try {
    await mongoose.connect(url);
    console.log('Connected to MongoDB');

    const userSchema = new mongoose.Schema({
      username: String,
      password: String
    });

    const User = mongoose.model('User', userSchema);

    const sampleUsers = [
      { username: 'user1', password: 'password1' },
      { username: 'user2', password: 'password2' },
      { username: 'user3', password: 'password3' },
      { username: 'user4', password: 'password4' },
      { username: 'user5', password: 'password5' }
    ];

    await User.insertMany(sampleUsers);
    console.log('Multiple documents inserted to User collection');

    // Close the connection after insertion
    mongoose.connection.close();
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

// Call the function to connect and insert sample data
connectToDatabase();                           