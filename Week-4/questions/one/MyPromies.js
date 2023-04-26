"use strict"

const STATE = {
    "FULFILLED": "fulfilled",
    "PENDING": "pending",
    "REJECTED": "rejected",
}

class MyPromise {

    constructor(executionFunction) {
        this.value;
        this.state = STATE.PENDING;
        this.promiseThenCallback = [];
        this.promiseCatchCallback = [];

        this.onResolve = this.onResolve.bind(this);
        this.onReject = this.onReject.bind(this);

        try {
            executionFunction(this.onResolve, this.onReject);
        } catch (error) {
            this.onReject(error);
        }
    }

    onResolve(value) {
        if (this.state !== STATE.PENDING) {
            return;
        }

        if (value instanceof MyPromise) {
            value.then(this.onResolve, this.onReject);
            return;
        }
        this.value = value;
        this.state = STATE.FULFILLED;
    }

    onReject(value) {
        if (this.state !== STATE.PENDING) {
            return;
        }

        if (value instanceof MyPromise) {
            value.then(this.onResolve, this.onReject);
            return;
        }

        this.value = value;
        this.state = STATE.REJECTED;
    }

    runCallbacks() {

        if (this.state === STATE.FULFILLED) {
            this.promiseThenCallback.forEach(callback => {
                this.value = callback(this.value);
            })
            this.promiseThenCallback = [];
        } else if (this.state === STATE.REJECTED) {
            this.promiseCatchCallback.forEach(callback => {
                callback(this.value);
            })
            this.promiseCatchCallback = [];
        }

    }

    then(onResolveCallback, onRejectCallback) {
        return new MyPromise((resolve, reject) => {

            this.promiseThenCallback.push(result => {
                if (onResolveCallback === undefined) {
                    resolve(result);
                    return;
                }
                try {
                    resolve(onResolveCallback(result));
                } catch (error) {
                    reject(error);
                }
            });

            this.promiseCatchCallback.push(result => {
                if (onRejectCallback === undefined) {
                    reject(result);
                    return;
                }
                try {
                    resolve(onRejectCallback(result));
                } catch (error) {
                    reject(error);
                }
            });

            this.runCallbacks();
        })
    }

    catch(onRejectCallback) {
        return this.then(undefined, onRejectCallback);
    }

    finally(callback) {
        return callback();
    };
}

function getNumber(MAXLIMIT = 100) {
    return Math.ceil(Math.random() * 100);
}

let num = new MyPromise((resolve, reject) => {
    let number = getNumber()
    if ((number % 5) === 0) {
        resolve(`${number} is a multiple of 5.`);
    } else {
        reject(`${number} is not a multiple of 5.`);
    }
});

num.then(console.log)
.catch(console.log);
