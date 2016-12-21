define('twitch-api/tests/helpers/resolver', ['exports', 'twitch-api/resolver', 'twitch-api/config/environment'], function (exports, _twitchApiResolver, _twitchApiConfigEnvironment) {

  var resolver = _twitchApiResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _twitchApiConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _twitchApiConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});