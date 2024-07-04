export const environment = {
    production: false,
    firebaseConfig: {
        apiKey: process.env['PUBLIC_APIKEY'],
        authDomain: process.env['PUBLIC_AUTHDOMAIN'],
        projectId: process.env['PUBLIC_PROJECT_ID'],
        storageBucket: process.env['PUBLIC_STORAGE_BUCKET'],
        messagingSenderId: process.env['PUBLIC_MESSAGING_SENDER_ID'],
        appId: process.env['PUBLIC_APP_ID'],
        measurementId: process.env['PUBLIC_MEASUREMENT_ID']
      }
}