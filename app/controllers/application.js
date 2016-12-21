import Ember from 'ember';

export default Ember.Controller.extend({
	q:'',

	actions:{
		search(q){
			this.get('target').transitionTo('main',
			{
				queryParams:{q:q,},
			});
		},
	},
});
