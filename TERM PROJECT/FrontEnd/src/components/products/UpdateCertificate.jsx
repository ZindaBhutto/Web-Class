import React from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import axios from "axios";
import certificateService from "../../services/CertificateService";

const UpdateCertificate = (props) => {
	const [Title, setTitle] = React.useState("");
	const [Year, setYear] = React.useState(0);
	const [Institute, setInstitute] = React.useState("");
	const id = props.match.params.id;
	React.useEffect(() => {
		certificateService.getSingleCertificate(id).then((data) => {
			setTitle(data.Title);
			setYear(data.Year);
			setInstitute(data.Institute);
		});
	}, []);
	return (
		<Grid container spacing={3}>
			<Grid item xs={12}>
				<h1>Update Certificate</h1>
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
							.updateProduct(id, { Title, Year, Institute })
							.then((data) => {
								console.log(data);
								props.history.push("/certificates");
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

export default UpdateCertificate;
