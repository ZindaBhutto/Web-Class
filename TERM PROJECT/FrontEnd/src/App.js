import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import TopMenu from "./components/TopMenu";

import LandingPage from "./components/LandingPage";
import Products from "./components/products/Products";
import ContactUs from "./components/ContactUs";
import NotFound from "./components/NotFound";
import NewProduct from "./components/products/NewProduct";
import NewCertificate from "./components/products/NewCertificate";
import UpdateProduct from "./components/products/UpdateProduct";
import UpdateCertificate from "./components/products/UpdateCertificate";
import Certificates from "./components/products/Certificates";

function App() {
	return (
		<Router>
			<div>
				<TopMenu />
				<div style={{ padding: "2px" }}>
					<Switch>
						<Route path="/contact-us" exact component={ContactUs} />
						<Route path="/products/new" component={NewProduct} />
						<Route path="/products/update/:id" component={UpdateProduct} />
						<Route path="/products" component={Products} />
						<Route path="/certificates/new" component={NewCertificate} />
						<Route
							path="/certificates/update/:id"
							component={UpdateCertificate}
						/>
						<Route path="/certificates" component={Certificates} />
						<Route path="/not-found" component={NotFound} />
						<Route path="/" exact component={LandingPage} />
						<Redirect to="/not-found" />
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
