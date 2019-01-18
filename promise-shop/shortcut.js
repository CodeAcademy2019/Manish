module.exports  = () => {
    var rejectedPromise = Promise.reject(new Error('REJECTED SECRET VALUE!'));
    rejectedPromise.catch((error) => {
        console.log(error.message);
    });
    return rejectedPromise;
}

