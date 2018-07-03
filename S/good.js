// SINGLE RESPONSIBILITY

// PRINCIPLE:
// A class should have one and only one reason to change, meaning that a class should only have one job.

const circle = (radius) => {
  const proto = {
    type: 'Circle',
    //code
  }
  return Object.assign(Object.create(proto), {radius})
};

const square = (length) => {
  const proto = {
    type: 'Square',
    //code
  }
  return Object.assign(Object.create(proto), {length})
};
