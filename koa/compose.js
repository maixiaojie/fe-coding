/*
 * @Author: wenyujie
 * @LastEditors: wenyujie
 * @Date: 2020-12-25 10:15:29
 * @LastEditTime: 2020-12-25 10:47:40
 * @Description: koa 中间件机制 compose
 * @FilePath: /koa/compose.js
 * @powerd by wenyujie
 */

//  koa是洋葱模型
function compose(ctx, middlewares) {
  if (!Array.isArray(middlewares))
    throw new TypeError("Middlewares must be an array");

  for (let fn of middlewares) {
    if (typeof fn !== "function")
      throw new TypeError("Middleware must be composed of functions");
  }

  return function () {
    const len = middlewares.length;
    const dispatch = function (i) {
      if (len === i) {
        return Promise.resolve();
      } else {
        const fn = middlewares[i];
        try {
          // 这里一定要bind 不要立即执行
          return Promise.resolve(fn(ctx, dispatch.bind(null, i + 1)));
        } catch (err) {
          return Promise.reject(err);
        }
      }
    };
    return dispatch(0);
  };
}

const fn = compose(ctx, middlewares);
fn();


/**
 * express是线性的
 * express中间件实现是基于callback回调函数同步的，他不会去等待异步（Promise）完成。
 */

 /**
  * 响应机制
  * 在koa中数据的响应式通过ctx.body进行设置，注意这里仅是设置并没有立即响应，而是在所有的中间件结束之后做了响应。
  * 这样做一个好处是在响应之间有一些预留操作空间。
  * 
  * express中是立即响应，如果还想在上层中间件做一些操作是有点难的
  */