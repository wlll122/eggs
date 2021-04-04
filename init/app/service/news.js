'use strict';
const Service = require('egg').Service;
class News extends Service {
  async getList() {
    // curl 获取远程数据
    const baseurl = this.config.url;
    const resdata = await this.ctx.curl(`${baseurl}appapi.php?a=getPortalList&catid=20&page=1`);
    const renderdata = JSON.parse(resdata.data);
    return renderdata;
  }
  async getNewsContent(aid) {
  // curl 获取远程数据
    const baseurl = this.config.url;
    const resdata = await this.ctx.curl(`${baseurl}appapi.php?a=getPortalArticle&aid=${aid}`);
    const renderdata = JSON.parse(resdata.data);
    return renderdata;
  }
}
module.exports = News;
