"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

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
define('twitch-api/components/stream-view', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define('twitch-api/controllers/main', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Controller.extend({
		queryParams: ['q'],
		q: null
	});
});
define('twitch-api/helpers/app-version', ['exports', 'ember', 'twitch-api/config/environment'], function (exports, _ember, _twitchApiConfigEnvironment) {
  exports.appVersion = appVersion;
  var version = _twitchApiConfigEnvironment['default'].APP.version;

  function appVersion() {
    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});
define('twitch-api/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('twitch-api/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('twitch-api/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'twitch-api/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _twitchApiConfigEnvironment) {
  var _config$APP = _twitchApiConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});
define('twitch-api/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('twitch-api/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('twitch-api/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.Controller.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('twitch-api/initializers/export-application-global', ['exports', 'ember', 'twitch-api/config/environment'], function (exports, _ember, _twitchApiConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_twitchApiConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _twitchApiConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_twitchApiConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('twitch-api/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('twitch-api/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: _ember['default'].K
  };
});
define('twitch-api/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define("twitch-api/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('twitch-api/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
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
define('twitch-api/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define("twitch-api/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "TB15+vEx", "block": "{\"statements\":[[\"open-element\",\"center\",[]],[\"flush-element\"],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"id\",\"container\"],[\"flush-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"id\",\"head\"],[\"flush-element\"],[\"text\",\"\\n\\t\\t\"],[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"Twitch Stream Search\"],[\"close-element\"],[\"text\",\"\\n\\t\\t\"],[\"open-element\",\"form\",[]],[\"static-attr\",\"method\",\"GET\"],[\"static-attr\",\"action\",\"/main\"],[\"flush-element\"],[\"text\",\"\\n\\t\\t\"],[\"append\",[\"helper\",[\"input\"],null,[[\"name\",\"id\",\"placeholder\"],[\"q\",\"searchVal\",\"Search query...\"]]],false],[\"text\",\"\\n\\t\\t\"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"value\",\"id\"],[\"submit\",\"Search\",\"submit\"]]],false],[\"text\",\"\\n\\t\\t\"],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"close-element\"],[\"text\",\"\\n\\n\\n\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "twitch-api/templates/application.hbs" } });
});
define("twitch-api/templates/components/stream-view", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "/NiWH5by", "block": "{\"statements\":[[\"open-element\",\"tr\",[]],[\"flush-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"td\",[]],[\"flush-element\"],[\"text\",\"\\n\\t\\t\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"pic\"],[\"flush-element\"],[\"open-element\",\"img\",[]],[\"dynamic-attr\",\"src\",[\"concat\",[[\"unknown\",[\"pic\"]]]]],[\"static-attr\",\"alt\",\"Preview\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"td\",[]],[\"flush-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"title\"],[\"flush-element\"],[\"text\",\"\\n\\t\\t\"],[\"open-element\",\"b\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"name\"]],false],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"gameName\"],[\"flush-element\"],[\"text\",\"\\n\\t\\tGame: \"],[\"append\",[\"unknown\",[\"game\"]],false],[\"text\",\" - \"],[\"append\",[\"unknown\",[\"viewers\"]],false],[\"text\",\" viewers\\n\\t\"],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"description\"],[\"flush-element\"],[\"text\",\"\\n\\t\\t\"],[\"append\",[\"unknown\",[\"description\"]],false],[\"text\",\"\\n\\t\"],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"yield\",\"default\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "twitch-api/templates/components/stream-view.hbs" } });
});
define("twitch-api/templates/main", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "XGNJilid", "block": "{\"statements\":[[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"id\",\"header\"],[\"flush-element\"],[\"open-element\",\"b\",[]],[\"flush-element\"],[\"text\",\"Displaying \"],[\"append\",[\"unknown\",[\"q\"]],false],[\"text\",\" Streams\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"id\",\"numStreams\"],[\"flush-element\"],[\"open-element\",\"i\",[]],[\"flush-element\"],[\"text\",\"Total results: \"],[\"append\",[\"unknown\",[\"model\",\"_total\"]],false],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"table\",[]],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\",\"streams\"]]],null,0],[\"close-element\"],[\"text\",\"\\n\\n\\n\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\\n\\t\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"\\n\\t\"],[\"append\",[\"helper\",[\"stream-view\"],null,[[\"name\",\"game\",\"description\",\"viewers\",\"pic\"],[[\"get\",[\"stream\",\"channel\",\"name\"]],[\"get\",[\"stream\",\"channel\",\"game\"]],[\"get\",[\"stream\",\"channel\",\"status\"]],[\"get\",[\"stream\",\"viewers\"]],[\"get\",[\"stream\",\"preview\",\"medium\"]]]]],false],[\"text\",\"\\n\\n\\n\"]],\"locals\":[\"stream\"]}],\"hasPartials\":false}", "meta": { "moduleName": "twitch-api/templates/main.hbs" } });
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('twitch-api/config/environment', ['ember'], function(Ember) {
  var prefix = 'twitch-api';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("twitch-api/app")["default"].create({"name":"twitch-api","version":"0.0.0+64289ccd"});
}

/* jshint ignore:end */
//# sourceMappingURL=twitch-api.map