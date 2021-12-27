import React from "react";
import { Grid, Button } from "@material-ui/core";
import productService from "./../../services/ProductsService";
import { withRouter } from "react-router";
const SingleProduct = (props) => {
	const { product, onDelete, history } = props;
	console.log(props);
	return (
		<Grid
			item
			xs={4}
			style={{
				textAlign: "center", // this does the magic
			}}
		>
			<h3
				style={{
					paddingTop: "3rem",
					color: "lemonchiffon",
					textAlign: "center",
				}}
			>
				{product.Institute}{" "}
			</h3>
			<p style={{ textAlign: "center", color: "lemonchiffon" }}>
				{product.PassOutYear}
			</p>
			<p style={{ textAlign: "center", color: "lemonchiffon" }}>
				{product.MajorCourse}
			</p>
			<Button
				variant="outlined"
				color="primary"
				onClick={(e) => {
					console.log("navigate to update");
					history.push("/products/update/" + product._id);
				}}
			>
				Edit
			</Button>
			<Button
				variant="outlined"
				color="secondary"
				onClick={(e) => {
					productService
						.deleteProduct(product._id)
						.then((data) => {
							console.log(data);
							onDelete();
						})
						.catch((err) => {
							console.log(err);
						});
				}}
			>
				Delete
			</Button>
			<hr style={{ color: "orange", height: "3px" }} />
		</Grid>
	);
};

export default withRouter(SingleProduct);
