// setTimeOut() is a function, that returns promises that will settle after sometime. It helps to schedule the tasks to be performed later. this function plays very important role in the async javascript.

// it takes two parameters, 
    // One is a callback function that we want to delay, 
    // the other is time, to specify the duration of delay in miliseconds.

    // setTimeOut(myFunc, 200);

console.log("This is the first line of the code");

const checkingTimeOut = () => {
    console.log("This line will be delayed!");
}

setTimeout(checkingTimeOut, 2000);

console.log("This is the last line of the code");