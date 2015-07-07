module.exports = mapmaker

function mapmaker(mapSpec) {
  if(mapSpec === null || typeof mapSpec !== 'object') {
    throw new TypeError('mapSpec must be an object')
  }

  if(isIterable(mapSpec)) {
    return new Map(mapSpec)
  }

  return new Map(
    Object.keys(mapSpec).map(function(key) {
      return [key, mapSpec[key]]
    })
  )
}

function isIterable(obj){
  if(typeof Symbol === 'undefined') {
    return obj instanceof Map
  }

  return typeof obj[Symbol.iterator] === 'function'
}
