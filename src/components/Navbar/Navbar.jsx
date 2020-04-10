import React from "react";
import style from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<nav>
			<ul>
				<li>
					<NavLink className={style.item} to="/profile" activeClassName={style.active}> Profile </NavLink>
				</li>
				<li>
					<NavLink className={style.item} to="/dialogs" activeClassName={style.active}> 	Messages </NavLink>
				</li>
				<li>
					<NavLink className={style.item} to="/users" activeClassName={style.active}> Users </NavLink>
				</li>
				<li>
					<NavLink className={style.item} to="/music" activeClassName={style.active}> Music  </NavLink>
				</li>
				<li>
					<NavLink className={style.item} to="/settings" activeClassName={style.active}> 	Settings </NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
