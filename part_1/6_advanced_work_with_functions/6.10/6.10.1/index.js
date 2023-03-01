function f() {
  console.log(this); // ?
}

let user = {
  g: f.bind(null),
};

user.g();
// null, потамучто в  g this=null всегда
