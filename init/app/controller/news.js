'use strict';
const Service = require('egg').Service;
class News extends Service {
  async init() {
    // this.ctx.body = '新闻系统';
    const list = await this.service.news.getList();
    // 调用extend方法
    this.app.foo();
    await this.ctx.render('index', {
      list: list.result,
    });
  }
  async getcontent() {
    const resdate = await this.service.news.getNewsContent(this.ctx.query.aid);
    await this.ctx.render('content', {
      list: resdate.result[0],
    });
  }
}
module.exports = News;
