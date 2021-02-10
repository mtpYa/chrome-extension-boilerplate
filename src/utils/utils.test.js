const sum = require('.');

test('showScriptType shows script type', () => {
  expect(sum.showScriptType('hello')).toEqual('hello');
});
