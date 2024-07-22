// Given N bulb, either on (1) or off (0). Turning on ith bulb causes all remaining buib on the right to flip. Find the min number of switches to turn all the bulbs in.
//  find the min number of switches to turn all the bulb on

function nBulb(arr) {
  let cost = 0;
  for (let n of arr) {
    if (cost % 2 == 0) n = n;
    else n = !n;

    if (n % 2 == 1) continue;
    else cost += 1;
  }
  return cost;
}
