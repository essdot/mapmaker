module.exports = mapmaker

function mapmaker(mapSpec) {
	if(mapSpec === null || typeof mapSpec !== 'object') {
		throw new TypeError('mapSpec must be an object')
	}

	return new Map(
		Object.keys(mapSpec).map(function(key) {
			return [key, mapSpec[key]]
		})
	)
}
