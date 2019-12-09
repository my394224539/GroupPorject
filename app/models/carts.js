import DS from 'ember-data';
const { Model, attr  } = DS;

export default Model.extend({
    item_id: attr('string'),
    item_name: attr('string'),
    price: attr('number'),
    image_url: attr('string'),
    subtotal:attr('number'),
    quantity:attr('string'),
    uid:attr('string'),
});
