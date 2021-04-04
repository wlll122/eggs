'use strict';
const Controller = require('egg').Controller;
class Admin extends Controller {
  async index() {
    this.ctx.body = 'test';
  }
}
module.exports = Admin;
