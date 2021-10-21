
var promise = new Promise(function(resolve, reject) {
    const x = "Monday";
    const y = "slcyv";
    if(x === y) {
      resolve();
    } else {
      reject();
    }
  });

  const fail = () => {
    console.log('Its Tuesday!');
  }

  promise.then(function() {
      console.log('Its Monday, back to work!');
  }).catch(fail);