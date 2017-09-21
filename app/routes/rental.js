import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('rental', params.rental_id);
  },
  saveReview(params) {
      var newReview = this.store.createRecord('review', params);
      var rental = params.rental;
      rental.get('reviews').addObject(newReview);
      newReview.save().then(function() {
        return rental.save();
      });
      this.transitionTo('rental', rental);
    }
});
