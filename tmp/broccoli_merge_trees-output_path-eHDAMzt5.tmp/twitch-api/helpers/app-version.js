define('twitch-api/helpers/app-version', ['exports', 'ember', 'twitch-api/config/environment'], function (exports, _ember, _twitchApiConfigEnvironment) {
  exports.appVersion = appVersion;
  var version = _twitchApiConfigEnvironment['default'].APP.version;

  function appVersion() {
    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});