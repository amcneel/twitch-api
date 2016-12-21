define('twitch-api/tests/helpers/start-app', ['exports', 'ember', 'twitch-api/app', 'twitch-api/config/environment'], function (exports, _ember, _twitchApiApp, _twitchApiConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    // use defaults, but you can override
    var attributes = _ember['default'].assign({}, _twitchApiConfigEnvironment['default'].APP, attrs);

    _ember['default'].run(function () {
      application = _twitchApiApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});