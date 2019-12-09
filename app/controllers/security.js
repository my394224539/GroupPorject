import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import firebase from 'firebase/app';
export default Controller.extend({
    firebaseApp: service(),
    actions: {
        inject: function(){
                const newInject = this.store.createRecord('items',{
                    //item_id: this.get('item_id'),
                    item_name: this.get('item_name'),
                    price: this.get('price'),
                    image_url: this.get('image_url')
                });
                newInject.save().then(function(){
                    alert("Data save successfully!!");
                }).catch(function(){
                    alert("Data save unsuccessfully!!");
                });
                this.set('item_name','price','image_url');
                
        },
        delete: function(){
            this.store.query('items', {filter: {
                //item_id: this.get('item_id'),
                item_name: this.get('item_name'),
                // price: this.get('price'),
                // image_url: this.get('image_url')
            }}).then((items) => {
                return items.firstObject.destroyRecord()
            })
        }
    }
});
