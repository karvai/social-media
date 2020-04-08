import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

let dialogs = [
  { id: 1, name: "Oleg" },
  { id: 2, name: "Igor" },
  { id: 3, name: "Ana" },
  { id: 4, name: "Pop" },
];

let messages = [
  { id: 1, message: "Hi" },
  { id: 2, message: "how are u" },
  { id: 3, message: "yo" },
  { id: 4, message: "Hi" },
  { id: 5, message: "no" },
];

let posts = [
  { id: 1, message: "Hi, how are you?", likes: 15 },
  { id: 2, message: "This is my first post.", likes: 20 },
];

ReactDOM.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages} posts={posts} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
