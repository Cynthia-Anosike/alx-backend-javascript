// A function that returns a promise to simulate async operation.
function fetchData() {
  return new Promise((resolve, reject) => {
    // a delay response e.g while fetching data from a server
    setTimeout(() => {
      const data = { message: 'Hello, promises' };
      resolve(data); // is the promise is fulfilled with the data.
      // but if there is an error, it can reject the promise
    }, 2000);
  });
}

fetchData().then((data) => {
  console.log(data.message);
}).catch((error) => {
  console.error(error);
});

// A program that fetch user data from a server and then fetch additional details based on user's ID
function fetchUserData() {
  return new Promise((resolve) => {
    // simulate server response with a delay os 2-seconds
    setTimeout(() => {
      const user = { id: 2, name: 'John Doe' };
      resolve(user);
    }, 2000);
  });
}
// simulate a function to fetch additional details based on userID
function fetchAdditionalDetails(userId) {
  return new Promise((resolve, reject) => {
    // simulate response with a delay of 1.5 seconds
    setTimeout(() => {
      if (userId === 1) {
        const details = { age: 30, email: 'john@gmail.com' };
        resolve(details);
      } else {
        reject('User ID not found!');
      }
    }, 1500);
  });
}
// using promises to fetch user and additional data
fetchUserData().then((user) => {
  console.log('User data:', user);
  return fetchAdditionalDetails(user.id);
}).then((details) => {
  console.log('Additiomal details:', details);
}).catch((error) => {
  console.error('Error:', error);
});
