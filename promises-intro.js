/* 


PROMISES WERE USED in ES6, IN ES8, WE USE ASYNC/AWAIT.
BEFORE PROMISES THERE WERE CALL BACKS

    JS IS A SINGLE THREADED APPLICATION.
        BECAUSE: IT HAS JUST ONE CALL STACK AND PROCESS/EVENT QUEUE

A promise is a special JavaScript object that links the “producing code” and the “consuming code” together. 

PROMISES REPRESENT THE EVENTUAL OUTCOMES OF AN ASYNCHRONOUS OPERATION.

PROMISES ARE USED TO HANDLE ASYNCHRONOUS OPERATION IN JAVASCRIPT. they are really useful in this purpose because of use of callbacks otherwise it would create a mess. Because multiple callbacks can make the code unmanageable. 

Promises can handle multiple async operations easily:

1. Improve code readibility
2. better handling of async operations
3. better flow of control definition in async logic./ async logic control flow is well defined.
4. Better Error handling

The “producing code” takes whatever time it needs to produce the promised result, and the “promise” makes that result available to all of the subscribed code when it’s ready.

JS promises are complex structures; they have additional features and limitations.

*/

// the constructor code for a promise:

let promise = new Promise(function(resolve, reject) {
    // "producing code"
    // executer is the function that is passed into new Promise
}) 

/* 

when a new Promise is created, the 'executer' runs automatically. and it contains the 'producing code', it produces the result.

the arguments: 'resolve' and 'reject' are callbacks and are provided by the JS itself.

Soon after the results have been produced, one of the two callback are called by the excuter

RESOLVE is called, if the job is finished successfully and the result is a value. The state is 'fulfilled'.

REJECT is called, if the job has failed and an error has occured. The state is called 'rejected'.

The promise object has following internal properties:

    STATE: initially; Pending --> changes to Fulfilled if Resolve is called or --> changes to Rejected, if reject is called.
    RESULT: initially: Undefined --> Value: if Resolve(value) or --> Error: if Reject(error) is called.

*/

// example: (Promise constructor, executer function, and producing code.)

let promise = new Promise(function(resolve, reject) {

    setTimeout( () => resolve('done'), 1000);

    // fulfilled state and result is a value/FULFILLED Promise

    //Promise is SETTLED

});


// 2.

let promise = new Promise(function(resolve, reject) {

    setTimeout( () => reject(new Error('Error!')) , 1000);
    // rejected state and result is an error/REJECTED Promise

    // Promise is SETTLED, in case of REJECTED state; the promise will provide the REASON in the Result (error).

    //  in the start the promise is PENDING
});


/* 

The executor should call only one resolve or one reject. Any state change is final.

All further calls of resolve and reject are ignored:

let promise = new Promise(function(resolve, reject) {
  resolve("done");

  reject(new Error("…")); --> ignored
  setTimeout(() => resolve("…")); --> ignored
});

The idea is that a job done by the executor may have only one result or an error.

Also, resolve/reject expect only one argument (or none) and will ignore additional arguments.

In case something goes wrong, the executor should call reject. That can be done with any type of argument (just like resolve). But it is recommended to use Error objects (or objects that inherit from Error). The reasoning for that will soon become apparent.

The properties state and result of the Promise object are internal. We can’t directly access them. We can use the methods .then/.catch/.finally for that. They are described below.

A Promise object serves as a link between the executor (the “producing code” or “singer”) and the consuming functions (the “fans”), which will receive the result or error. Consuming functions can be registered (subscribed) using methods .then, .catch and .finally

*/





