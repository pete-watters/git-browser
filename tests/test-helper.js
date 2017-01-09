import resolver from './helpers/resolver';
import { setResolver } from 'ember-mocha';

setResolver(resolver);

if (window.location.search.indexOf('nocontainer') > -1) {
    Ember.$('#ember-testing-container').css({
        visibility: 'hidden'
    });
}

Ember.$('body').on('click.mocha-stats', '#mocha-stats a', function (e) {
    e.preventDefault();
    return false;
});