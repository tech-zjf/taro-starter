import request from "..";

const ArticleApi = {
  /**
   *   文章列表
   */
  async getArticleList(params) {
    const data = await request({
      urlRoute: "/article",
      method: "GET",
      data: params,
    });
    return data;
  },

  /**
   *   文章详情
   */
  async getArticleDetail(params) {
    const data = await request({
      urlRoute: "/article",
      method: "GET",
      data: params,
    });
    return data;
  },
};

export default ArticleApi;
