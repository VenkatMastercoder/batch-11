// Array Methods

let array = [1, 2, 3, 4];

/**
 * 1. MAP - It like an Loop
 *    [ It Return an Array ]
 * 2. FILTER
 *    [ It Return an Array ]
 * 3. REDUCE
 */

array.map((items, index) => {
  console.log(items, index);
});

let ans = array.map((items) => {
  return items * items;
});

console.log(ans);

let res = array.filter((items) => {
  return items > 2;
});

console.log(res);

// Reduce
let resAns = array.reduce((accumlator, currentValue) => {
  return accumlator - currentValue;
});

console.log(resAns)

// Array 
console.log(array.reverse())
/**
 * 
 * Map , filter , Reduce , Pop , Push , Reverse
 * 
 * Mutable
 * - it will change the Orginal Array 
 *   - Pop
 *   - push
 *   - reverse
 * 
 * Immutable
 * - it will not change the Orginal Array
 *  - Map
 *  - Filter
 *  - Reduce
 */