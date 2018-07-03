# Liskov substitution principle

`Let q(x) be a property provable about objects of x of type T. Then q(y) should be provable for objects y of type S where S is a subtype of T.`

All this is stating is that every subclass/derived class should be substitutable for their base/parent class.

In other words, as simple as that, a subclass should override the parent class methods in a way that does not break functionality from a client’s point of view.

Still making use of our areaCalculator factory function, say we have a volumeCalculator factory function that extends the areaCalculator factory function, and in our case for extending an object without breaking changes in ES6 we do it by using Object.assign() and the Object.getPrototypeOf():

```
const volumeCalculator = (s) => {
  const proto = {
    type: 'volumeCalculator'
  }
  const areaCalProto = Object.getPrototypeOf(areaCalculator())
  const inherit = Object.assign({}, areaCalProto, proto)
  return Object.assign(Object.create(inherit), {shapes: s})
}
```
