define('twitch-api/routes/main', ['exports', 'ember'], function (exports, _ember) {
	//client id: m5f27odifm8vz0whylavhhspr2s0lh
	//url: 'https://api.twitch.tv/kraken//search/streams?q=starcraft&client_id=m5f27odifm8vz0whylavhhspr2s0lh'

	exports['default'] = _ember['default'].Route.extend({
		ajax: _ember['default'].inject.service(),
		queryParams: ['q'],
		q: null,
		model: function model(query) {
			return _ember['default'].$.ajax({
				type: 'GET',
				url: 'https://api.twitch.tv/kraken/search/streams?q=' + q,
				headers: { 'Client-ID': 'm5f27odifm8vz0whylavhhspr2s0lh' },
				success: function success(data) {
					console.log(data);
					console.log(data.streams[0].channel.game);
				}

			});
		}

	});
});