import Ember from 'ember';
//client id: m5f27odifm8vz0whylavhhspr2s0lh
//url: 'https://api.twitch.tv/kraken/search/streams?q=starcraft&client_id=m5f27odifm8vz0whylavhhspr2s0lh'

export default Ember.Route.extend({
	queryParams: {
		q:{
			refreshModel: true
		}	
	},
	model(params){
		var query = params.q;

		return Ember.$.ajax({
				type: 'GET',
				accepts: 'application/json',
				url: 'https://api.twitch.tv/kraken/search/streams?q='+query,
				headers: {'Client-ID': 'm5f27odifm8vz0whylavhhspr2s0lh'},
				success: function(data){
					console.log(data);
					
				}
			});
	}
	
	
});


