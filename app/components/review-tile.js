import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(review) {
      if (confirm('Are you sure this review is not important to you..?')) {
        this.sendAction('destroyReview', review);
      }
    }
  }
});
