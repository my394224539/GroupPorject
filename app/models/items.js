import DS from 'ember-data';
const { Model, attr  } = DS;

export default Model.extend({
    item_id123: attr('string'),
    item_name: attr('string'),
    price: attr('string'),
    image_url: attr('string')
});
