'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async getData() {
    // 获取serveice 下面的数据
    this.service.new.getNewsList();
  }
}

module.exports = HomeController;
