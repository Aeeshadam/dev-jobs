const admin = require("firebase-admin");
const serviceAccount = require("./firebase-service.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://dev-jobs-b684a.firebaseio.com",
});

const firestore = admin.firestore();

const data = require("./src/data.cjs");

async function importData() {
  try {
    for (const job of data) {
      await firestore.collection("jobs").add(job);
    }
    console.log("Data imported successfully");
  } catch (error) {
    console.error("Error importing data:", error);
  }
}

importData();
