import React from "react";
import logo from "../Logo.png";

const TopMenu = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-dark">
			<div className="container">
				<a className="navbar-brand" href="#">
					<img className="logo" src={logo} alt="...logo" />
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item active">
							<a className="nav-link" href="http://localhost:3000/">
								Resume <span className="sr-only"></span>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="http://localhost:3000/products/">
								Education
							</a>
						</li>
						<li className="nav-item">
							<a
								className="nav-link"
								href="http://localhost:3000/certificates/"
							>
								Certificates
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="http://localhost:3000/contact-us/">
								Contact Me
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default TopMenu;
