define('twitch-api/tests/integration/components/stream-game-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/stream-game-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/stream-game-test.js should pass jshint.');
  });
});