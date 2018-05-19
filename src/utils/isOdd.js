const isOdd = (num) => {
  if (typeof num !== 'number') {
    throw new Error('num must take in a type number');
  }
  return (num % 2) !== 0;
};

export default isOdd;
