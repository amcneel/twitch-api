define('twitch-api/tests/routes/main.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/main.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/main.js should pass jshint.\nroutes/main.js: line 7, col 16, \'twitchRequest\' is not defined.\n\n1 error');
  });
});