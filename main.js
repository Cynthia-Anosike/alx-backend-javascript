// Imagine we have a function that returns a Promise to simulate an asynchronous operation.
function fetchData() {
  return new Promise((resolve, reject) => {
    // Simulate a delayed response (e.g., fetching data from a server).
    setTimeout(() => {
      const data = { message: "Hello, Promises!" };
      resolve(data); // The Promise is fulfilled with the data.
      // If there was an error, you can reject the Promise: reject("Error occurred!");
    }, 2000); // Simulating a 2-second delay.
  });
}

// Using the fetchData function that returns a Promise.
fetchData()
  .then((data) => {
    console.log(data.message); // Output: "Hello, Promises!"
  })
  .catch((error) => {
    console.error(error); // Handle errors if the Promise is rejected.
  });
