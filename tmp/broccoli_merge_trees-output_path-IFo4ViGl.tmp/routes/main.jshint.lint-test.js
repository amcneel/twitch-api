QUnit.module('JSHint | routes/main.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'routes/main.js should pass jshint.\nroutes/main.js: line 9, col 11, \'query\' is defined but never used.\nroutes/main.js: line 12, col 67, \'q\' is not defined.\n\n2 errors');
});
