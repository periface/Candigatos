// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCNt57RII5J759a0EWwuTQhV7rR3fJvk8Y',
    authDomain: 'ratetheguy.firebaseapp.com',
    databaseURL: 'https://ratetheguy.firebaseio.com',
    projectId: 'ratetheguy',
    storageBucket: 'ratetheguy.appspot.com',
    messagingSenderId: '106706008562'
  }
};
