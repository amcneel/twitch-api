define('twitch-api/tests/routes/main.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/main.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/main.js should pass jshint.\nroutes/main.js: line 8, col 11, Missing semicolon.\nroutes/main.js: line 5, col 9, \'$\' is not defined.\nroutes/main.js: line 6, col 24, \'$\' is not defined.\n\n3 errors');
  });
});