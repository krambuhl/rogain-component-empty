var test = require('tape');
var Empty = require('..');

test('<Children /> :: with children', function(t) {
  t.plan(2);

  var res = Children({ type: Heading, children: Link });

  t.equal(res.type, Link.type);
  t.equal(res.name, Link.name);
});

test('<Children /> :: without children', function(t) {
  t.plan(1);

  var res = Children({ type: Heading });

  t.equal(res === undefined, true);
});