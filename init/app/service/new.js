'use strict';
const Controller = require('egg').Controller;
class News extends Controller {
  async getNewsList() {
    const newslist = [ 11, 22, 33 ];
    // 服务之间可以相互调用
    console.log(this.service.user.init());

    return newslist;
  }
}
module.exports = News;

