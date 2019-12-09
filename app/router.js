import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('catalog');
  this.route('cart');
  this.route('checkout');
  this.route('security');
});

export default Router;
