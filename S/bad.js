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
