import Ember from 'ember';
//client id: m5f27odifm8vz0whylavhhspr2s0lh
//url: 'https://api.twitch.tv/kraken//search/streams?q=starcraft&client_id=m5f27odifm8vz0whylavhhspr2s0lh'

export default Ember.Route.extend({
	ajax: Ember.inject.service(),
	model(){
		return Ember.$.ajax({
			type: 'GET',
			url: 'https://api.twitch.tv/kraken/search/streams?q=starcraft',
			headers: {'Client-ID': 'm5f27odifm8vz0whylavhhspr2s0lh'},
			success: function(data){
				console.log(data);
				console.log(data.streams[0].channel.game);
			}

		});
			
	}
	
});


