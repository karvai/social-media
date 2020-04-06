import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app-wrapper">
      <header>
        <img
          src="https://www.plantronics.com/etc/designs/plantronics/clientlib-all/img/poly-logo.png"
          alt="logo"
        />
      </header>
      <nav>
        <ul>
          <li>
            <a href="#">Profile</a>
          </li>
          <li>
            <a href="#">Messages</a>
          </li>
          <li>
            <a href="#">News</a>
          </li>
          <li>
            <a href="#">Music</a>
          </li>
          <li>
            <a href="#">Settings</a>
          </li>
        </ul>
      </nav>
      <div className="content">
        <div>
          <img
            src="https://openimagedenoise.github.io/images/moana_16spp_oidn.jpg"
            alt="great"
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
            alt=""
          />
        </div>
        <div>
          my posts
          <div>new post</div>
        </div>
        <div>
          <div>post 1</div>
          <div>post 2</div>
        </div>
      </div>
    </div>
  );
}

export default App;
