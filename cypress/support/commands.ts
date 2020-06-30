// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
import { firebaseConfig } from './firebase/firebase-config';

import { attachCustomCommands } from 'cypress-firebase/lib';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';

const fbInstance = firebase.initializeApp(firebaseConfig);

const firestoreEmulatorHost = Cypress.env('FIRESTORE_EMULATOR_HOST');

if (firestoreEmulatorHost) {
  console.log('firestoreEmulatorHost');
  firebase.firestore().settings({
    host: 'localhost:8080',
    ssl: false,
    // experimentalForceLongPolling: true,
  });
}

/*
if (fbInstance) {
  (window as any).fbInstance = fbInstance;
}
*/

attachCustomCommands({ Cypress, cy, firebase });
