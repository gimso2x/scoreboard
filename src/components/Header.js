import React from "react";

export const Header = (props) =>
	(
		<header className="header">
			<h1 className="h1">{props.title}</h1>
			<span className="stats">Player: {props.totalPlayers}</span>
		</header>
	);
