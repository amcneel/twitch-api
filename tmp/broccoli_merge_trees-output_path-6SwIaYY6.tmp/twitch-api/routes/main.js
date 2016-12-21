import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		return curl -H 'Accept: application/vnd.twitchtv.v3+json' \
		-X GET 'https://api.twitch.tv/kraken/streams/summary'
	}
});
