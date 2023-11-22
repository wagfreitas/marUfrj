// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// WARNING - Values under "firebase" and value of "googleApiKey" needs to be replaced from your own accounts
// If left as is, it firbase and google map related functionality will not work on LIVE instance.
export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDE_qrQDCWfWWq_wM6LEnHGSl6B1VQopiY",
    authDomain: "sisufrj-1f312.firebaseapp.com",
    projectId: "sisufrj-1f312",
    storageBucket: "sisufrj-1f312.appspot.com",
    messagingSenderId: "677131549351",
    appId: "1:677131549351:web:b422141cf01eca09ac3982",
    measurementId: "G-S9F7SZMKXS"
  },
  //googleApiKey: 'AIzaSyAIIYOxA7qeetFz6TuR1Qewc0Rrjhzx7ZU'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
