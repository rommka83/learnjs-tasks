function aclean(arr) {
  let map = new Map();
  for (let el of arr) {
    let str = el.toLowerCase().split('').sort().join('');
    !map.has(str) && map.set(str, el);
  }

  return Array.from(map.values());
}

let arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares'];

console.log(aclean(arr));
