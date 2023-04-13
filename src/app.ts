import React from "react";
import "./app.less";

interface AppProps {
  children: any;
}

const App: React.FC<AppProps> = (props) => {
  return props.children;
};

export default App;
