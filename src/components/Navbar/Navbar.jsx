import React from "react";
import s from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a className={`${s.item} ${s.active}`} href="/profile">
            Profile
          </a>
        </li>
        <li>
          <a className={s.item} href="/dialogs">
            Messages
          </a>
        </li>
        <li>
          <a className={s.item} href="/news">
            News
          </a>
        </li>
        <li>
          <a className={s.item} href="/music">
            Music
          </a>
        </li>
        <li>
          <a className={s.item} href="/settings">
            Settings
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
