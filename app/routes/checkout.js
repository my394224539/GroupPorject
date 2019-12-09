import Route from '@ember/routing/route';
import firebase from 'firebase/app';
export default Route.extend({
    model: function(){
        var user = firebase.auth().currentUser;
           // return this.store.findAll('carts');
           return this.store.query('carts', {
            filter: {
              uid: user.uid
            }});
        }
        
});
