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
  return new Promise((resolve, reject) => {
    Taro.request({
      url: _url,
      data,
      method,
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
