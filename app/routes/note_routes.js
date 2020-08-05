var admin = require('firebase-admin');

var serviceAccount = require("./gsis-coop-firebase-adminsdk-i99bh-fb937c68a7.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    apiKey: "AIzaSyBi7jIQx3_8dtMPVDorzpas0e_xvq-yJYY",
    authDomain: "gsis-coop.firebaseapp.com",
    databaseURL: "https://gsis-coop.firebaseio.com",
    projectId: "gsis-coop",
    storageBucket: "gsis-coop.appspot.com",
    messagingSenderId: "888140950968",
    appId: "1:888140950968:web:ace39f50b75557ba22f34d",
    measurementId: "G-RXN150GV38"
  });

module.exports = function(app) {
    app.post('/changePassword', (req, res) =>{
        // create note here
        console.log('request body', req.body )
        console.log('request', req)

        admin.auth().updateUser(req.body.uid, {
            password: req.body.password,
          })
            .then(function(userRecord) {
              // See the UserRecord reference doc for the contents of userRecord.
              console.log('Successfully updated user', userRecord.toJSON());
              res.send('Successfully updated user')
            })
            .catch(function(error) {
              console.log('Error updating user:', error);
              res.send('Error updating user')
            });
    })

    app.post('/deleteUser', (req, res) =>{
      // create note here
      console.log('request body', req.body )
      console.log('request', req)

      admin.auth().deleteUser(req.body.uid)
          .then(function(userRecord) {
            // See the UserRecord reference doc for the contents of userRecord.
            console.log('Successfully updated user', userRecord.toJSON());
            res.send('Successfully updated user')
          })
          .catch(function(error) {
            console.log('Error updating user:', error);
            res.send('Error updating user')
          });
  })
}