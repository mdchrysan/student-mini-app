// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyBds9xaJxbH_UGZ59p0ooV4wHHwXDtlOYY",
    authDomain: "student-mini-app.firebaseapp.com",
    databaseURL: "https://student-mini-app.firebaseio.com",
    projectId: "student-mini-app",
    storageBucket: "student-mini-app.appspot.com",
    messagingSenderId: "248723125943",
    appId: "1:248723125943:web:db77258b680848f70aff32",
    measurementId: "G-EP827PFH45"
  }
};

// Initialize Firebase
//firebase.initializeApp(firebaseConfig);
//firebase.analytics();


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
