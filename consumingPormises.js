// Initially, a promise is in a PENDING state, but we have gaurantee that it will be SETTLED. So, once the promise has settled, what is the computer supposed to do after that. This is where, .then() method is used. it allows us to say that "I have a promise, when it settles, then here's what I want to do."

// .then() is a higher-order-function, it takes 2 parameters: both are callback functions.
// Both these functions are called: handlers.

// when a promise is settled, the appropriate handler will be invoked with that sttled value.

// func.then(onFulfilled, onRejected);      --> Success Handler & Failure Handler --> both are optional.

// if handler is needed and is not provided, then upon failure, instead of throwing an error, .then() will return the settled value of the promise.

// .then() always returns the promise.