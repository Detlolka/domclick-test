const randomArr = (arr) => arr.sort(() => 0.5 - Math.random());
const ansSort = (arr) => arr.sort().join('');

export { randomArr, ansSort };
