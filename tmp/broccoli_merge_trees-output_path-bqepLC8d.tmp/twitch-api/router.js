define('twitch-api/router', ['exports', 'ember', 'twitch-api/config/environment'], function (exports, _ember, _twitchApiConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _twitchApiConfigEnvironment['default'].locationType,
    rootURL: _twitchApiConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('main');
  });

  exports['default'] = Router;
});