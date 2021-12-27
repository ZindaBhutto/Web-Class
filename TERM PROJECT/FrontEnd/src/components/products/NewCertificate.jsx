import React from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import axios from "axios";
import certificateService from "../../services/CertificateService";
const NewProduct = (props) => {
	const [Title, setTitle] = React.useState("");
	const [Year, setYear] = React.useState(0);
	const [Institute, setInstitute] = React.useState("");
	return (
		<Grid container spacing={3}>
			<Grid item xs={12}>
				<h1>Add New Certificate</h1>
			</Grid>
			<Grid item xs={3}></Grid>
			<Grid item xs={6}>
				<TextField
					label="title"
					fullWidth
					value={Title}
					onChange={(e) => {
						setTitle(e.target.value);
					}}
				/>
				<TextField
					label="year"
					fullWidth
					value={Year}
					onChange={(e) => {
						setYear(e.target.value);
					}}
				/>
				<TextField
					label="Institute"
					fullWidth
					value={Institute}
					onChange={(e) => {
						setInstitute(e.target.value);
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
						certificateService
							.addProduct({ Title, Year, Institute })
							.then((data) => {
								console.log(data);
								props.history.push("/certificates");
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
