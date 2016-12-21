define('twitch-api/tests/routes/main.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/main.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/main.js should pass jshint.\nroutes/main.js: line 5, col 13, \'test\' is defined but never used.\n\n1 error');
  });
});