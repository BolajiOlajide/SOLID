// SINGLE Responsibility

// GOOD
const circle = (radius) => {
  const proto = {
    type: 'Circle',
    area() {
      return Math.PI * Math.pow(this.radius, 2);
    }
  };

  return Object.assign(Object.create(proto), { radius });
}
const square = (length) => {
  const proto = {
    type: 'Square',
    area () { return Math.pow(this.length, 2); }
  };

  return Object.assign(Object.create(proto), { length });
};

const areaCalculator = (shapes) => {
  const proto = {
    sum() {
      const area = [];
      for (_ of this.shapes) {
        area.push(_.area())
      }
      return area.reduce((v, c) => c += v, 0);
    },
    output () {
     return `Sum of the areas of provided shapes: ${this.sum()}`
    }
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

// When I have a new shape I can simply create a new factory function for it.
