define('twitch-api/app', ['exports', 'ember', 'twitch-api/resolver', 'ember-load-initializers', 'twitch-api/config/environment'], function (exports, _ember, _twitchApiResolver, _emberLoadInitializers, _twitchApiConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _twitchApiConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _twitchApiConfigEnvironment['default'].podModulePrefix,
    Resolver: _twitchApiResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _twitchApiConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});