import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		var test = this.$("#searchVal").val();
	}
});
