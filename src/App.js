import React from "react";
import "./App.css";
import app from "./firebase";
import { getMessaging, getToken } from "firebase/messaging";

function App() {
  React.useEffect(() => {
    // Get registration token. Initially this makes a network call, once retrieved
    // subsequent calls to getToken will return from cache.
    const messaging = getMessaging();
    getToken(messaging, {
      vapidKey:
        "BCQ0vD3yigVxsWqtLXfMH9VP2J4DK4ejUZtooR4wkIYj_7is_QLkvaWKJXua0brEu6wBsNInnwHvi8DSOWNUWVw",
    })
      .then((currentToken) => {
        if (currentToken) {
          // Send the token to your server and update the UI if necessary
          console.log(currentToken);
        } else {
          // Show permission request UI
          console.log(
            "No registration token available. Request permission to generate one."
          );
          // ...
        }
      })
      .catch((err) => {
        console.log("An error occurred while retrieving token. ", err);
        // ...
      });
  });
  return <div className="">Hi My Push Notification service</div>;
}

export default App;
