QUnit.module('JSHint | helpers/twitch-request.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'helpers/twitch-request.js should pass jshint.\nhelpers/twitch-request.js: line 3, col 31, \'query\' is defined but never used.\n\n1 error');
});
