// *** EVENT LOOP IN JS *** ::: (It is a mechanism that allows Node.js to perform non-blocking I/O operations — despite the fact that JavaScript is single-threaded — by offloading operations to the system kernel whenever possible.) (Event loop puts the task from task/callback queue to call stack) (It is a FIFO queue to which the operations are added as soon as the event occurs.) (Web api's include setTimeout, setInterval, fetch, etc.)
// Visit this website:: (http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D)

// setTimeout WILL GO TO THE WEB API SECTION BEFORE AND THEN TO CALL STACK

setTimeout(function timer() {
  console.log("You clicked the button!");
}, 2000);

console.log("Hi!");

setTimeout(function timeout() {
  console.log("Click the button!");
}, 5000);

console.log("Welcome to loupe.");
