define('twitch-api/routes/main', ['exports', 'ember'], function (exports, _ember) {
	//client id: m5f27odifm8vz0whylavhhspr2s0lh
	//url: 'https://api.twitch.tv/kraken/search/streams?q=starcraft&client_id=m5f27odifm8vz0whylavhhspr2s0lh'

	exports['default'] = _ember['default'].Route.extend({
		queryParams: {
			q: {
				refreshModel: true
			}
		},
		model: function model(params) {
			var query = params.q;

			return _ember['default'].$.ajax({
				type: 'GET',
				accepts: 'application/json',
				url: 'https://api.twitch.tv/kraken/search/streams?q=' + query,
				headers: { 'Client-ID': 'm5f27odifm8vz0whylavhhspr2s0lh' },
				success: function success(data) {
					console.log(data);
				}
			});
		}

	});
});