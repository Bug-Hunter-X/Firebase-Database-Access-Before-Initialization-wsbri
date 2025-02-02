To rectify this, you need to ensure that database operations are performed only after the Firebase app has been successfully initialized.  This can be achieved using Promises or async/await:

```javascript
// Correct - Using async/await
async function addData() {
  await firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  await db.collection('myCollection').add({name: 'test'});
  console.log('Data added successfully!');
}
addData();
```

Or using `.then()` method:

```javascript
// Correct - Using .then()
firebase.initializeApp(firebaseConfig).then(() => {
  const db = firebase.firestore();
  db.collection('myCollection').add({name: 'test'}).then(() => {
    console.log('Data added successfully!');
  }).catch((error) => {
    console.error('Error adding document: ', error);
  });
}).catch((error) => {
  console.error('Error initializing Firebase:', error);
});
```
These approaches guarantee that database operations are executed only after the Firebase initialization completes successfully.