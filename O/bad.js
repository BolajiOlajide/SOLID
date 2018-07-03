// Open-Closed Principle

// BAD

const circle = (radius) => {
  const proto = {
    type: 'Circle'
  };

  return Object.assign(Object.create(proto), { radius });
};

const square = (length) => {
  const proto = {
    type: 'Square'
  };

  return Object.assign(Object.create(proto), { length });
};

const areaCalculator = (shapes) => {
  const proto = {
    sum() {
      const area = [];
      for (_ of this.shapes) {
        if (_.type === 'Square') {
          area.push(Math.pow(_.length, 2));
        }
        area.push(Math.PI * Math.pow(_.radius, 2));
      }
      return area.reduce((v, c) => c += v, 0);
    },
    output () { return `Sum of the areas of provided shapes: ${this.sum()}` }
  };

  return Object.assign(Object.create(proto), { shapes });
};

const shapes = [
  circle(2),
  square(5),
  square(6)
];

const areas = areaCalculator(shapes);
console.log(areas.output());

// When I have a new shape to add it will be stressful as I have to add another
// condition to the if-else statement contained in the shapes method.
