import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
	link: {
		color: "white",
		paddingRight: "1rem",
	},
}));

const TopMenu = () => {
	const classes = useStyles();
	return (
		<AppBar color= "secondary"position="static" >
			<Toolbar>
				<Typography variant="h6">
					<Link to="/" className={classes.link}>
						Home
					</Link>
				</Typography>
				<Typography variant="h6">
					<Link to="/recipes" className={classes.link}>
						Recipes
					</Link>
				</Typography>
				<Typography variant="h6">
					<Link to="/contact-us" className={classes.link}>
						Contact Us
					</Link>
				</Typography>
			</Toolbar>
		</AppBar>
	);
};

export default TopMenu;
