import React, { useEffect } from "react";
import "./app.less";
import { useDidShow, useDidHide } from "@tarojs/taro";
// 全局样式
import "./app.less";

interface AppProps {
  children: any;
}

const App: React.FC<AppProps> = (props) => {
  // 可以使用所有的 React Hooks
  useEffect(() => {});

  // 对应 onShow
  useDidShow(() => {});

  // 对应 onHide
  useDidHide(() => {});

  return props.children;
};

export default App;
