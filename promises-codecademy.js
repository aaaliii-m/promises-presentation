

const executerFunction = (resolve, reject) => {

    if(true) {
        resolve('Done');
    }

};

const myFirstPromise = new Promise(executerFunction);