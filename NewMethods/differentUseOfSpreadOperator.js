// here argument that is passed is chaged into an array using spread operator
function apple(...inputs) {
  console.log(inputs);
}
apple("m", "a", "n");
