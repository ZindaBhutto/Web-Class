import React from "react";
import Typed from "react-typed";
import Products from "./Products";
import Certificates from "./Certificates";
const Header = () => {
	return (
		<div className="header-wrapper">
			<div className="main-info">
				<h1>Aftab Ahmad Khan</h1>
				<Typed
					className="typed-text"
					strings={[
						"I would've done better",
						"If I had more time",
						"One more day!",
						"Wait Two!",
						"No Three, deal?",
					]}
					typeSpeed={40}
					backSpeed={40}
					loop
				/>
				<Products />
				<hr style={{ color: "white", height: "10px" }} />
				<Certificates />
			</div>
		</div>
	);
};

export default Header;
