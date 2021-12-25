import React from "react";
import SingleRecipe from "./SingleRecipe";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import productService from "./ProductsService";
//This one is mine
const useStyles = makeStyles((theme) => ({
	addBtn: {
		position: "absolute",
		bottom: theme.spacing(2),
		right: theme.spacing(2),
	},
}));

const Recipes = (props) => {
	const [recipes, setRecipes] = React.useState([]);
	const classes = useStyles();
	const getData = () => {
		productService
			.getProducts()
			.then((data) => {
				setRecipes(data);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	// getData();
	React.useEffect(getData, []);
	const handleNewProductClick = () => {
		console.log(props);
		props.history.push("/recipes/new");
	};
	return (
		<div style={{backgroundColor: "yellow"}}>
			<h1>Recipes</h1>
			<Fab
				color="primary"
				aria-label="add"
				className={classes.addBtn}
				onClick={handleNewProductClick}
			>
				<AddIcon />
			</Fab>
			{recipes.length === 0 ? (
				<p>There are no recipes</p>
			) : (
				<Grid container spacing={3}>
					{recipes.map((recipes, index) => (
						<SingleRecipe key={index} recipes={recipes} onDelete={getData} />
					))}
				</Grid>
				
			)}
			<Fab
				color="primary"
				aria-label="add"
				className={classes.addBtn}
				onClick={handleNewProductClick}
			>
				<AddIcon />
			</Fab>
		</div>
	);
};

export default Recipes;
