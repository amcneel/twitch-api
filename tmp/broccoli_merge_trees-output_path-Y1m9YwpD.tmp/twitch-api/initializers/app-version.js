define('twitch-api/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'twitch-api/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _twitchApiConfigEnvironment) {
  var _config$APP = _twitchApiConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});