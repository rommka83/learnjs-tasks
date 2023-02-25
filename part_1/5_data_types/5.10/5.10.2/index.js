function topSalary(salaries) {
  if (Object.keys(salaries).length === 0 && salaries.constructor === Object) {
    return null;
  }

  let arr = Object.entries(salaries)
    .map(([name, value]) => value)
    .sort((a, b) => {
      return a - b;
    })
    .at(-1);
  console.log(arr);
}

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

topSalary(salaries);
