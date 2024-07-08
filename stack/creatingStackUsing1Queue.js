const Stack = function () {
  this.q1 = [];
};
Stack.prototype.push = function (x) {
  this.q1.push(x);

  for (let i = 0; i < this.q1.length - 1; i++) {
    this.q1.push(this.q1.shift());
  }
};
Stack.prototype.pop = function () {
  return this.q1.shift();
};
Stack.prototype.top = function () {
  if (this.q1.length > 1) return this.q1[0];
  return;
};
Stack.prototype.empty = function () {
  if (this.q1.length) return this.q1.length === 0;
  return;
};

const st = new Stack();
console.log(st);
st.push(10);
st.push(20);
st.push(30);
st.push(40);
console.log(st.pop());
console.log(st.top());
