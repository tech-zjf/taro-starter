import Taro from "@tarojs/taro";
import { BASEURL } from "./config";

interface RequestOptions {
  urlRoute: string;
  method: "GET" | "POST" | "PATCH" | "DELETE";
  data: any;
  complete?: (_) => void;
}
console.log("BASEURL", BASEURL);

const request = (options: RequestOptions) => {
  const { urlRoute, method, data, complete } = options;
  const _url = BASEURL + urlRoute;
  const token = Taro.getStorageSync("access_token");
  return new Promise((resolve, reject) => {
    Taro.request({
      url: _url,
      data,
      method,
      header: {
        Authorization: token,
      },
      timeout: 2000,
      success(res) {
        resolve(res);
      },
      fail(err) {
        reject(err);
      },
      complete,
    });
  });
};

export default request;
