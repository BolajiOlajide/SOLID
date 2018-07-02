// SINGLE Responsibility

// BAD

const shape = (length, type) => {
  const proto = {
    type,
    area() {
      if (type === 'Square') {
        return Math.pow(this.length, 2);
      }
      return Math.PI * Math.pow(this.length, 2);
    }
  };

  return Object.assign(Object.create(proto), { length, type });
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
  shape(2, 'Circle'),
  shape(5, 'Square'),
  shape(6, 'Square')
];

const areas = areaCalculator(shapes);
console.log(areas.output());

// When I have a new shape to add it will be stressful as I have to add another
// condition to the if-else statement contained in the shapes method.
