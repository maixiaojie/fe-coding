/*
 * @Author: maxiaojie
 * @LastEditors: wenyujie
 * @Date: 2020-12-21 14:35:00
 * @LastEditTime: 2020-12-21 15:50:56
 * @Description: promise
 * @FilePath: /promise/index.js
 * @powerd by maxiaojie
 */

const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

function myPromise(executor) {
  this.state = PENDING;
  this.value = null;
  this.reason = null;
  this.onFulfilledCallbacks = [];
  this.onRejectedCallbacks = [];

  const resolve = (value) => {
    if (this.state === PENDING) {
      this.state = FULFILLED;
      this.value = value;
      this.onFulfilledCallbacks.forEach((fun) => {
        fun();
      });
    }
  };
  const reject = (reason) => {
    if (this.state === PENDING) {
      this.state = FULFILLED;
      this.reason = reason;
      this.onRejectedCallbacks.forEach((fun) => {
        fun();
      });
    }
  };
  try {
    executor(resolve, reject);
  } catch (reason) {
    reject(reason);
  }
}

myPromise.prototype.then = function (onFulfilled, onRejected) {
  if (typeof onFulfilled != "function") {
    onFulfilled = function (val) {
      return val;
    };
  }
  if (typeof onRejected != "function") {
    onRejected = function (reason) {
      throw reason;
    };
  }
  const promise2 = new myPromise((resolve, reject) => {
    switch (this.state) {
      case FULFILLED:
        setTimeout(() => {
          try {
            const x = onFulfilled(this.value);
            resolve(x);
          } catch (reason) {
            reject(reason);
          }
        }, 0);
        break;
      case REJECTED:
        setTimeout(() => {
          try {
            const x = onRejected(this.reason);
            resolve(x);
          } catch (reason) {
            reject(reason);
          }
        }, 0);
        break;
      case PENDING:
        this.onFulfilledCallbacks.push(() => {
          setTimeout(() => {
            try {
              const x = onFulfilled(this.value);
              resolve(x);
            } catch (reason) {
              reject(reason);
            }
          }, 0);
        });
        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              const x = onRejected(this.reason);
              resolve(x);
            } catch (reason) {
              reject(reason);
            }
          });
        });
    }
  });
  return promise2;
};

myPromise.prototype.catch = function (onRejected) {
  return this.then(null, onRejected);
};

myPromise.prototype.finally = function (fn) {
  return this.then(
    (value) => {
      fn();
      return value;
    },
    (reason) => {
      fn();
      throw reason;
    }
  );
};

myPromise.prototype.resolve = function (value) {
  return new myPromise((resolve, reject) => {
    resolve(value);
  });
};

myPromise.prototype.reject = function (reason) {
  return new myPromise((resolve, reject) => {
    reject(reason);
  });
};

myPromise.prototype.all = function (promises) {
  return new myPromise((resolve, reject) => {
    if (promises.length === 0) {
      resolve([]);
    } else {
      let result = [];
      let index = 0;
      for (let i = 0; i < promises.length; i++) {
        promises[i].then(
          (data) => {
            result[i] = data;
            if (++index === promises.length) {
              resolve(result);
            }
          },
          (err) => {
            reject(err);
            return;
          }
        );
      }
    }
  });
};

myPromise.prototype.race = function (promises) {
  return new myPromise((resolve, reject) => {
    if (promises.length === 0) {
      resolve();
    } else {
      for (let i = 0; i < promises.length; i++) {
        promises[i].then(
          (data) => {
            resolve(data);
          },
          (err) => {
            reject(err);
            return;
          }
        );
      }
    }
  });
};

let promise = new myPromise((resolve, reject) => {
  resolve("1");
});

promise.then((val) => {
  console.log(val);
});
