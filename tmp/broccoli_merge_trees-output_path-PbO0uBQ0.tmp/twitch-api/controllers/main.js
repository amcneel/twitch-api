define('twitch-api/controllers/main', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Controller.extend({
		queryParams: ['q']
	});
});