/*
 * @Author: wenyujie
 * @LastEditors: wenyujie
 * @Date: 2020-12-25 15:32:53
 * @LastEditTime: 2020-12-25 15:32:58
 * @Description: schedule
 * @FilePath: /schedule/index.js
 * @powerd by wenyuie
 */

class Scheduler {
    constructor(num) {
      // 允许同时允许的异步函数的最大个数
      this.num = num;
      // 用来承载还未执行的异步
      this.list = [];
      // 计数
      this.count = 0
    }
    async add(fn) {
      if(this.count >= this.num) {
        await new Promise(resolve => this.list.push(resolve))
      }
      this.count++;
      const result = await fn();
      this.count--;
      if(this.list.length > 0) {
        this.list.shift()()
      }
      return result
    }
  }
  /**
   * 
  const schedule = new Scheduler(2)
  const task = time => new Promise(resolve => setTimeout(resolve, time))
  const addTask = (time, order) => {
    schedule.add(() => task(time)).then(() => console.log(order))
  }
  addTask(1000, 1)
  addTask(500, 2)
  addTask(300, 3)
  addTask(400, 4)
   * 
   */