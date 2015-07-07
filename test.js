const test = require('tape')
const mapmaker = require('./index')

test('returns a map', function(t) {
	const map = mapmaker({abc: 'def', 123: 456})
	const keys = []
	const iter = map.keys()

	keys.push(iter.next().value)
	keys.push(iter.next().value)
	keys.sort()

	t.ok(map instanceof Map)
	t.deepEqual(keys, ['123', 'abc'])
	t.equal(map.get('abc'), 'def')
	t.equal(map.get('123'), 456)
	t.equal(map.size, 2)

	t.ok(map.has('123'))
	t.notOk(map.has('456'))

	t.end()
})


test('TypeError for non-object', function(t) {
	t.throws(mapmaker.bind(null, 2), TypeError)
	t.throws(mapmaker.bind(null, undefined), TypeError)
	t.throws(mapmaker.bind(null, null), TypeError)
	t.throws(mapmaker.bind(null, 'str'), TypeError)
	t.throws(mapmaker.bind(null, true), TypeError)

	t.end()
})
