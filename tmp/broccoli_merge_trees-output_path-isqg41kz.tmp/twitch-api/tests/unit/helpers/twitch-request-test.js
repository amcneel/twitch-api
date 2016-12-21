define('twitch-api/tests/unit/helpers/twitch-request-test', ['exports', 'twitch-api/helpers/twitch-request', 'qunit'], function (exports, _twitchApiHelpersTwitchRequest, _qunit) {

  (0, _qunit.module)('Unit | Helper | twitch request');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _twitchApiHelpersTwitchRequest.twitchRequest)([42]);
    assert.ok(result);
  });
});