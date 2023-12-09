import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-prilozhenie-41-справ-долж-l');
  this.route('i-i-s-prilozhenie-41-справ-долж-e',
  { path: 'i-i-s-prilozhenie-41-справ-долж-e/:id' });
  this.route('i-i-s-prilozhenie-41-справ-долж-e.new',
  { path: 'i-i-s-prilozhenie-41-справ-долж-e/new' });
  this.route('i-i-s-prilozhenie-41-справ-сотр-l');
  this.route('i-i-s-prilozhenie-41-справ-сотр-e',
  { path: 'i-i-s-prilozhenie-41-справ-сотр-e/:id' });
  this.route('i-i-s-prilozhenie-41-справ-сотр-e.new',
  { path: 'i-i-s-prilozhenie-41-справ-сотр-e/new' });
});

export default Router;
