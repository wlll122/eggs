'use strict';
const dayjs = require('dayjs');
module.exports = {
  formatTime(param) {
    // this 是 helper 对象，在其中可以调用其他 helper 方法
    // this.ctx => context 对象
    // this.app => application 对象
    // 格式化日期
    console.log(param);
    const data = dayjs(param * 1000).format('DD/MM/YYYY');
    return data;
  },
};
