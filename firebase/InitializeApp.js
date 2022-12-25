import admin from "firebase-admin";
import serviceAccount from "../home-services-ead5e-firebase-adminsdk-a2dba-ab7dcb47f8.json";

try {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
} catch (error) {
  if (!/already exists/u.test(error.message)) {
    console.error("Firebase admin initialization error", error.stack);
  }
}

export default admin;
