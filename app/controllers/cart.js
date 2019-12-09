import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
export default Controller.extend({
    firebaseApp: service(),
    creditArray: computed('model.@each.subtotal', function(){
        return this.get('model').mapBy('subtotal');
      }),
    
    totalmoney: computed.sum('creditArray'),
    actions: {
          delete:function(carts) {
            carts.deleteRecord();
      carts.save().then(function(response) {
        console.log('Success!')
      }).catch(function() {
        console.log('Failure!')
      });
        //     this.get('carts').removeObject( model);
        //     model.destroyRecord();
         },
    onQuantityChange: function(carts){

        carts.set('subtotal',(carts.get('price') * carts.get('quantity')));

    },

    }

});
