/*
 * @Author: wenyujie
 * @LastEditors: wenyujie
 * @Date: 2021-01-07 18:27:19
 * @LastEditTime: 2021-01-07 18:33:44
 * @Description: generator + promise 实现 async/await
 * @FilePath: /generator/index.js
 * @powerd by hundun
 */
function co(gen) {
  if (!gen) return;
  return new Promise((resolve, reject) => {
    var it = gen();
    console.log(it);
    try {
      function step(next) {
        if (next.done) {
          resolve(next.value);
        } else {
          Promise.resolve(next.value).then(
            (res) => {
              return step(it.next(res));
            },
            (e) => {
              return step(it.throw(e));
            }
          );
        }
      }
      step(it.next());
    } catch (e) {
      return reject(e);
    }
  });
}

function asyncHello() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(123);
    }, 3000);
  });
}
co(function* hello() {
  const data = yield asyncHello();
  console.log(data);
  console.log(456);
});
