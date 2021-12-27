import React from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import axios from "axios";
import productService from "../../services/ProductsService";

const UpdateProduct = (props) => {
	const [Institute, setInstitute] = React.useState("");
	const [PassOutYear, setPassOutYear] = React.useState(0);
	const [MajorCourse, setMajorCourse] = React.useState("");
	const id = props.match.params.id;
	React.useEffect(() => {
		productService.getSingleProduct(id).then((data) => {
			setInstitute(data.Institute);
			setPassOutYear(data.PassOutYear);
			setMajorCourse(data.MajorCourse);
		});
	}, []);
	return (
		<Grid container spacing={3}>
			<Grid item xs={12}>
				<h1>Update Product</h1>
			</Grid>
			<Grid item xs={3}></Grid>
			<Grid item xs={6}>
				<TextField
					label="Institute"
					fullWidth
					value={Institute}
					onChange={(e) => {
						setInstitute(e.target.value);
					}}
				/>
				<TextField
					label="year"
					fullWidth
					value={PassOutYear}
					onChange={(e) => {
						setPassOutYear(e.target.value);
					}}
				/>
				<TextField
					label="MajorCourse"
					fullWidth
					value={MajorCourse}
					onChange={(e) => {
						setMajorCourse(e.target.value);
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
							.updateProduct(id, { Institute, PassOutYear, MajorCourse })
							.then((data) => {
								console.log(data);
								props.history.push("/products");
							})
							.catch((err) => {
								console.log(err);
							});
					}}
				>
					Update
				</Button>
			</Grid>
		</Grid>
	);
};

export default UpdateProduct;
