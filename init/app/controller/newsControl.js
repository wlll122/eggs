'use strict';
const Controller = require('egg').Controller;
class NewsController extends Controller {
  async index() {
    this.ctx.query.uid;
    // 获取get传值
    console.log(this.ctx.query.uid);
    // 使用模板引擎,此处为异步方法`,定义变量传给页面
    const msg = '后台数据';
    const list = await this.service.new.getNewsList();
    // 打印全局config定义的数据
    console.log(this.config.api);
    await this.ctx.render('news', {
      msg, list,
    });
  }
  async newsList() {
    // koa 获取路由 ctx.params
    console.log(this.ctx.params);

    this.ctx.box = '新闻列表';
  }
}
module.exports = NewsController;
