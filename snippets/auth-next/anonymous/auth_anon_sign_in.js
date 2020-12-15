// This snippet file was generated by processing the source file:
// ./auth-next/anonymous.js
//
// To make edits to the snippets in this file, please edit the source

// [START auth_anon_sign_in_modular]
import { getAuth, signInAnonymously } from "firebase/auth";

const auth = getAuth(firebaseApp);
signInAnonymously(auth)
  .then(() => {
    // Signed in..
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ...
  })
// [END auth_anon_sign_in_modular]