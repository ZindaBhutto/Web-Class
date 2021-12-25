import React from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import productService from "./ProductsService";
const NewProduct = (props) => {
	const [title, setTitle] = React.useState("");
	const [body, setBody] = React.useState("");
	// THIS ONE IS MINE
	return (
		<Grid container spacing={3}>
			<Grid item xs={12}>
				<h1>Add New Recipe</h1>
			</Grid>
			<Grid item xs={3}></Grid>
			<Grid item xs={6}>
				<TextField
					label="title"
					fullWidth
					value={title}
					onChange={(e) => {
						setTitle(e.target.value);
					}}
				/>
				<TextField
					label="body"
					fullWidth
					value={body}
					onChange={(e) => {
						setBody(e.target.value);
					}}
				/>
			</Grid>
			<Grid item xs={3}></Grid>
			<Grid item xs={3}></Grid>
			<Grid item xs={9}>
				<Button
					variant="contained"
					color="primary"
					onClick={(e) => {
						productService
							.addProduct({ title, body })
							.then((data) => {
								console.log(data);
								props.history.push("/recipes");
							})
							.catch((err) => {
								console.log(err);
							});
					}}
				>
					Add New
				</Button>
			</Grid>
		</Grid>
	);
};

export default NewProduct;
