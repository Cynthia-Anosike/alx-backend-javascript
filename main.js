function getFullResponseFromAPI(success) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(success) {
          const data = {
            status: 200,
            body: 'success',
          };
          resolve(data);
        } else {
            const response = 'A faulty API';
            reject(response);
        }
      }, 2000)
    }) 
  }
  
getFullResponseFromAPI(true).then((data) => {
    console.log('API is:', data);
}).catch((response) => {
    console.error(`Error: ${response}`);
})

getFullResponseFromAPI().then((data) => {
    console.log('API is:', data);
}).catch((response) => {
    console.error(`Error: ${response}`);
})

// Catch me if you can
function handleResponseFromAPI(promise) {
    return promise
    .then(() => ({
        status: 200,
        body: 'success',
    }))
    .catch(() => Error())
    .finally(() => console.log('Got a response from API'));
};

const promise = Promise.resolve();
handleResponseFromAPI(promise);