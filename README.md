# Firebase Database Access Before Initialization

This repository demonstrates a common error in Firebase applications: attempting to access the database before the Firebase app has finished initializing.  This can lead to unexpected errors and prevent your application from functioning correctly.

The `bug.js` file shows the incorrect implementation, where database operations are initiated before the initialization process is complete. The `bugSolution.js` file provides the corrected version, using Promises or async/await to ensure that database operations only occur after successful initialization.