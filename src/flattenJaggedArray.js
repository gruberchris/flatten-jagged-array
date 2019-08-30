const flattenJaggedArray = (source, destination) => {
  if (Array.isArray(source) && Array.isArray(destination)) {
    source.map(x => {
      if (Array.isArray(x)) {
        flattenJaggedArray(x, destination);
      } else {
        destination.push(x);
      }
    })
  }

  return destination;
};

module.exports = flattenJaggedArray;