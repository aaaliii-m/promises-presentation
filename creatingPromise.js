

// first of all we need an executor function, an executor function has two parameters which are two callback functions. 

const myExecutor = (resolve, reject) => {
    // inside the executor, there is a producing code
    if(true) {
        resolve('This really is true');
    } else {
        reject('that was all a lie');
    }
};

// secondly, we create a constructor for a promise using 'new' keyword.

// we will use a function for this purpose and return the promise constructor, like so:

const myNewPromise = () => {
    return new Promise(myExecutor);
};

// the executor runs automatically, when the constructor is called.

const aPromise = myNewPromise();
console.log(aPromise);                  // prints: Promise { 'This really is true' } -> the promise is settled, state is fulfilled and value is the value of the value returned by resolve callback.

// we still need to resolve the promise.