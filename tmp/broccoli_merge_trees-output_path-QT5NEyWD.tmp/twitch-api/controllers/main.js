import Ember from 'ember';

export default Ember.Controller.extend({
	queryParams: ['q'],
	q: null,
	ajax: Ember.inject.service(),
	
	

	
});

