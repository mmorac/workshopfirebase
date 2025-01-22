/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import {onRequest} from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import * as admin from "firebase-admin";
import { onDocumentCreated } from "firebase-functions/v2/firestore";
import { Timestamp } from "firebase-admin/firestore";

// Initialize the Firebase Admin SDK
admin.initializeApp();


export const logUserCreation = onDocumentCreated('users/{userId}', async (event) => {
    try {
      // Extract the new document data and user ID
      const userData = event.data; // Data of the created document
      const userId = event.params.userId; // Document ID of the user
   
      if (!userData) {
        console.error('No data found in the created user document.');
        return;
      }
 
      // Reference to the "log" collection
      const logCollectionRef = admin.firestore().collection('log');

      
     
      // Log entry to write
      const logEntry = {
        userId: userId, // Reference to the user document ID
        createdAt: Timestamp.fromDate(new Date()), // Current date and time
      };

      console.log('####### Creating log entry: ', logEntry);
      
      // Write the log entry to the "log" collection
      await logCollectionRef.add(logEntry);
      
      console.log(`Log entry created for user ${userId}`);
    } catch (error) {
      console.error('Error writing log entry:', error);
    }
  });


// Start writing functions
// https://firebase.google.com/docs/functions/typescript

// export const helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

export const whatTimeIsIt = onRequest((request, response) => {
    const date = new Date();
    const time = date.toLocaleTimeString();
    logger.info(`The time is: ${time}`);
    response.send(`The time is: ${time}`);
});

