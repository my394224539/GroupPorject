import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import firebase from 'firebase/app';

export default Controller.extend({
    session: service(),
    firebaseApp: service(),
    actions: {
        logout() {
            return this.get('session').invalidate();
        },
        async login() {
            const auth = await this.get('firebaseApp').auth();
            const provider = new firebase.auth.GoogleAuthProvider();
            return auth.signInWithPopup(provider)
            .then(function() {
             var user = firebase.auth().currentUser;
                const db=firebase.firestore();
               db.collection("users").doc(user.uid).set({
                   name: user.displayName,
                   uid: user.uid,
                   email: user.email
               });
            });
           
                
        },
    }
});
