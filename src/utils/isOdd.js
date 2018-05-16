const isOdd = (num) => {
	if (typeof num !== 'number') {
		throw new Error('isOdd() must take in a type number parameter');
	}
	return (num % 2) !== 0;
}

export default isOdd;