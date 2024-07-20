var leastInterval = function (tasks, n) {
  let maxHeap = new MaxHeap();
  let queue = [];
  let taskObj = {};

  for (let task of tasks) {
    if (!taskObj[task]) {
      taskObj[task] = 0;
    }
    taskObj[task]++;
  }
  // console.log(taskObj);
  for (let val of Object.values(taskObj)) {
    maxHeap.insert(val);
  }
  // console.log(maxHeap.size());
  // console.log(maxHeap.removeMax());
  let time = 0;
  while (maxHeap.size() > 0 || queue.length > 0) {
    time++;

    if (maxHeap.size() > 0) {
      let noOfTask = maxHeap.removeMax();
      noOfTask -= 1;
      if (noOfTask > 0) {
        queue.push([noOfTask, time + n]);
      }
    }

    if (queue.length > 0 && queue[0][1] == time) {
      let [noOfTaskLeft, timeInProcess] = queue.shift();
      maxHeap.insert(noOfTaskLeft);
    }
  }
  return time;
};

var leastInterval2 = function (tasks, n) {
  // Step 1: Count the frequency of each task
  const taskCounts = new Array(26).fill(0);
  for (const task of tasks) {
    taskCounts[task.charCodeAt(0) - "A".charCodeAt(0)]++;
  }

  // Step 2: Sort task frequencies in descending order
  taskCounts.sort((a, b) => b - a);

  // Step 3: Find the maximum frequency
  const maxFreq = taskCounts[0];
  let idleSlots = (maxFreq - 1) * n;
  //   console.log(taskCounts);

  // Step 4: Reduce the number of idle slots
  for (let i = 1; i < 26; i++) {
    idleSlots -= Math.min(taskCounts[i], maxFreq - 1);
  }

  // Step 5: Calculate the total time required
  return idleSlots > 0 ? tasks.length + idleSlots : tasks.length;
};

// Example usage:
const tasks = ["A", "A", "A", "B", "B", "C", "C"];
const n = 2;
console.log(leastInterval2(tasks, n));
