import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
export default Controller.extend({
    firebaseApp: service(),
    creditArray: computed('model.@each.subtotal', function(){
        return this.get('model').mapBy('subtotal');
      }),
    
    totalmoney: computed.sum('creditArray'),
    len: function() {
        var todos = this.get('model');
        return todos.get('length');
      }.property('model.@each')
});
