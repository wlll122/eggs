'use strict';
const Service = require('egg').Service;
class UserInfo extends Service {
  async init() {
    return {
      age: 123,
      name: '张三',
    };
  }
}
module.exports = UserInfo;
