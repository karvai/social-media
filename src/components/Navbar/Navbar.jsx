import React from "react";
import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<nav>
			<ul>
				<li>
					<NavLink className={s.item} to="/profile" activeClassName={s.active}> Profile </NavLink>
				</li>
				<li>
					<NavLink className={s.item} to="/dialogs" activeClassName={s.active}> 	Messages </NavLink>
				</li>
				<li>
					<NavLink className={s.item} to="/users" activeClassName={s.active}> Users </NavLink>
				</li>
				<li>
					<NavLink className={s.item} to="/music" activeClassName={s.active}> Music  </NavLink>
				</li>
				<li>
					<NavLink className={s.item} to="/settings" activeClassName={s.active}> 	Settings </NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
