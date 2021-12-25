import React from "react";
import { Button, Grid } from "@material-ui/core";
import DeleteIcon from '@material-ui/core/SvgIcon';
import productService from "./ProductsService";
import { withRouter } from "react-router-dom";

import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import EditIcon from '@material-ui/icons/Edit';
import Card from '@material-ui/core/Card';


//THIS IS MINE
const SingleRecipe = (props) => {
	const { recipes, onDelete, history } = props;
	return (
		<Grid style={{ padding: "10px" },{backgroundColor: "yellow"}} item xs={4}>

			<h2>
				{recipes.title}{" "}
				<EditIcon
					variant="contained"
					color="secondary"
					onClick={(e) => {
						console.log("navigate to update");
						history.push("/recipes/update/" + recipes._id);
					}}
				/>
					
				{" "}
				<DeleteRoundedIcon
				variant= "contained"
				color="secondary"
					
					onClick={(e) => {
						productService
							.deleteProduct(recipes._id)
							.then((data) => {
								console.log(data);
								onDelete();
							})
							.catch((err) => {
								console.log(err);
							});
					}}
				
					 />
			</h2>
			<p>{recipes.body}</p>

			<hr />
		</Grid>
	);
};

export default withRouter(SingleRecipe);
