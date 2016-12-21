define('twitch-api/routes/main', ['exports', 'ember'], function (exports, _ember) {
	//client id: m5f27odifm8vz0whylavhhspr2s0lh

	exports['default'] = _ember['default'].Route.extend({
		model: function model() {
			return twitchRequest();
		}

	});
});