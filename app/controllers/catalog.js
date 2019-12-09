import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import firebase from 'firebase/app';

export default Controller.extend({
    firebaseApp: service(),
    actions: {
        inject: function(){
                const newInject = this.store.createRecord('items',{
                    item_id: this.get('item_id'),
                    item_name: this.get('item_name'),
                    price: this.get('price'),
                    image_url: this.get('image_url')
                });
                newInject.save();
                this.set('item_name','price','image_url');
        },
        delete: function(){
            this.store.query('items', {filter: {
                item_id: this.get('item_id'),
                //item_name: this.get('item_name'),
                // price: this.get('price'),
                // image_url: this.get('image_url')
            }}).then((items) => {
                return items.firstObject.destroyRecord()
            })
        },
        ATC: function(item){
            
            var user = firebase.auth().currentUser;
            const db=firebase.firestore();
            var docRef = db.collection("users").doc(user.uid);

              const carts = this.store.createRecord('carts', {                   
              item_id: item.get('item_id'),
              item_name: item.get('item_name'),
              price: item.get('price'),
              image_url: item.get('image_url'),
              subtotal:item.get('price'),
              quantity:1,
              uid:user.uid
            });
            carts.save().then(() => {
              this.set('item_id', 'item_name','price','image_url');
            });


    },
    } 
});