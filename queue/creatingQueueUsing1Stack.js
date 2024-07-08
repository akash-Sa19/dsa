var MyQueue = function () {
  this.s1 = [];
  this.s2 = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.s1.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  console.log(this.s1);
  console.log(this.s1.length);
  
  while (this.s1.length > 1) {
    console.log(this.s1.length);
    this.s2.push(this.s1.pop());
  }
  console.log(this.s1);
  console.log(this.s2
    );

  let popedVal = this.s1.pop();
  console.log(popedVal);
  console.log(this.s1);
  console.log(this.s2);
  // const s2Length = this.s2.length
  while (this.s2.length > 0) {
    this.s1.push(this.s2.pop());
    console.log(this.s1);
    
  }
  console.log(this.s1);
  console.log(this.s2);
  return popedVal;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  return this.s1[0];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.s1.length === 0;
};

//  Your MyQueue object will be instantiated and called as such:
var obj = new MyQueue();
obj.push(10);
obj.push(20);
obj.push(30);
obj.push(40);
console.log(obj.pop());
console.log(obj.peek());
console.log(obj.empty());
