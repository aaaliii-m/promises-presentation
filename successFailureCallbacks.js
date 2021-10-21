// to handle a 'settled' promise, we invoke .then() function on the promise, with callbacks as arguments.

// these callback/handler functions are success callback/success handler function and failure callback/failure handler function.

// EXAMPLE:

let prom = new Promise((resolve, reject) => {
    let num = Math.random();
    if (num < .5 ){
      resolve('Yay!');
    } else {
      reject('Ohhh noooo!');
    }
  });
   
  const handleSuccess = (resolvedValue) => {
    console.log(resolvedValue);
  };
   
  const handleFailure = (rejectionReason) => {
    console.log(rejectionReason);
  };
   
  prom.then(handleSuccess, handleFailure);

  