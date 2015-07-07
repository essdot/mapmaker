mapmaker - make Maps
====

`mapmaker` gives you a nicer interface for making `Map`s, so you can pass a plain object instead of the arrays of 2 the default implementation accepts.

Using
====

```javascript

// default implementation
new Map([['key', 'val'], ['greeting', 'hi']])

// mapmaker
mapmaker({key: 'val', greeting: 'hi'})
```