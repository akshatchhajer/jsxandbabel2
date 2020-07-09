var React = require("react");
var ReactDOM = require("react-dom");

const name = "akshat";
const numb = Math.floor(Math.random() * 10);
const url = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading">fav foods of {name}</h1>
    <h2>my lucky number is {numb}</h2>
    <ul>
      <li>milk</li>
      <li>eggs</li>
      <li>rajmaaa</li>
    </ul>
    <img src={url} />
  </div>,
  document.getElementById("root")
);
