define('twitch-api/tests/test-helper', ['exports', 'twitch-api/tests/helpers/resolver', 'ember-qunit'], function (exports, _twitchApiTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_twitchApiTestsHelpersResolver['default']);
});