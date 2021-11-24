import React from "react";

const Header = () => {
	return (
		<header>
			<button className="unit-toggle">
				<div className="active">°C</div>
				<div>°F</div>
			</button>
		</header>
	);
};

export default Header;
