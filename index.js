
let arr = [1, 2, 3, 4];

const fill = (coll, value, start = 0, end = coll.length) => {
  if (end > coll.length) {
    end = coll.length;
  }
  for (let i = start; i < end; i += 1) {
    coll[i] = value;
  }

  return coll
};


console.log(fill(arr, '*'))

arr = [1, 2, 3, 4];

console.log(fill(arr, '*', 0, 10))

export default fill;