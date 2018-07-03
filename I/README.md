# Interface Segregation Principle

```
A client should never be forced to implement an interface that it doesn’t use or
 clients shouldn’t be forced to depend on methods they do not use.
```

Continuing with our shapes example, we know that we also have solid shapes, so since we would also want to calculate the volume of the shape, we can add another contract to the shapeInterface:

```
const shapeInterface = (state) => ({
  type: 'shapeInterface',
  area: () => state.area(state),
  volume: () => state.volume(state)
});
```

Any shape we create must implement the volume method, but we know that squares are flat shapes and that they do not have volumes, so this interface would force the square factory function to implement a method that it has no use of.

Interface segregation principle says no to this, instead you could create another interface called solidShapeInterface that has the volume contract and solid shapes like cubes etc. can implement this interface.

```
const shapeInterface = (state) => ({
  type: 'shapeInterface',
  area: () => state.area(state)
});

const solidShapeInterface = (state) => ({
  type: 'solidShapeInterface',
  volume: () => state.volume(state)
});

const cube = (length) => {
  const proto = {
    length,
    type   : 'Cube',
    area   : (args) => Math.pow(args.length, 2),
    volume : (args) => Math.pow(args.length, 3)
  }
  const basics  = shapeInterface(proto)
  const complex = solidShapeInterface(proto)
  const composite = Object.assign({}, basics, complex)
  return Object.assign(Object.create(composite), {length})
}
```
