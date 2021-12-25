import React from "react";
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
import UpdateProduct from "./components/products/UpdateProduct";

function App() {
	return (
		<Router>
			<div style={{ padding: "10px" },{backgroundColor: "yellow"}}>
				<TopMenu />
				<div>
					<Switch>
						<Route path="/contact-us" exact component={ContactUs} />
						<Route path="/recipes/new" component={NewProduct} />
						<Route path="/recipes/update/:id" component={UpdateProduct} />
						<Route path="/recipes" component={Products} />
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
