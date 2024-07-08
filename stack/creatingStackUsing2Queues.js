class Stack {
  constructor() {
    this.q1 = [];
    this.q2 = [];
  }
  push(x) {
    this.q1.push(x);
    return;
  }
  pop() {
    while (this.q1.length > 1) {
      this.q2.push(this.q1.shift());
    }
    const popedVal = this.q1[0];
    this.q1 = this.q2;
    this.q2 = [];
    return popedVal;
  }
  top() {
    if (this.q1.length > 0) {
      return this.q1[this.q1.length - 1];
    }
    return;
  }
  empty() {
    return this.q1.length === 0;
  }
}

const st = new Stack();
st.push(10);
st.push(20);
st.push(30);
st.push(40);
console.log(st.top());
console.log(st.pop());
console.log(st.pop());

console.log(st.top());

console.log(st.pop());
console.log(st.top());
