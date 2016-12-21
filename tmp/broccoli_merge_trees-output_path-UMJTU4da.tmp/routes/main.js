import Ember from 'ember';
//client id: m5f27odifm8vz0whylavhhspr2s0lh


export default Ember.Route.extend({
	model(){
		return twitchRequest();
	}
	
});


