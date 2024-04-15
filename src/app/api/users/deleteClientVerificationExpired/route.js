// import User from '@/models/userModel';
// import cron from 'node-cron';


// cron.schedule('0 * * * *', async () => {
//   try {
//     const expiryThreshold = new Date(Date.now() - 3600000);
//     const unverifiedUsers = await User.find({
//       verified: false,
//       verifyTokenExpiry: { $lt: expiryThreshold },
//     });

//     // Delete unverified users
//     await Promise.all(unverifiedUsers.map(user => user.deleteOne()));

//     console.log(`${unverifiedUsers.length} unverified users deleted.`);
//   } catch (error) {
//     console.error('Error deleting unverified users:', error);
//   }
// });