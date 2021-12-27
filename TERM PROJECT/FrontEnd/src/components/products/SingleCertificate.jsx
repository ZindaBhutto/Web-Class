import React from "react";
import { Grid, Button } from "@material-ui/core";
import certificateService from "../../services/CertificateService";
import { withRouter } from "react-router";
const SingleCertificate = (props) => {
	const { certificate, onDelete, history } = props;
	console.log(props);
	return (
		<Grid
			item
			xs={6}
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
				{certificate.Title}{" "}
			</h3>
			<p style={{ textAlign: "center", color: "lemonchiffon" }}>
				{certificate.Year}
			</p>
			<p style={{ textAlign: "center", color: "lemonchiffon" }}>
				{certificate.Institute}
			</p>

			<Button
				variant="outlined"
				color="primary"
				onClick={(e) => {
					console.log("navigate to update");
					history.push("/certificates/update/" + certificate._id);
				}}
			>
				Edit
			</Button>

			<Button
				variant="outlined"
				color="secondary"
				onClick={(e) => {
					certificateService
						.deleteProduct(certificate._id)
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

export default withRouter(SingleCertificate);
