import React from "react";
import SingleCertificate from "./SingleCertificate";

import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import certificateService from "../../services/CertificateService";
const useStyles = makeStyles((theme) => ({
	addBtn: {
		position: "absolute",
		bottom: theme.spacing(2),
		right: theme.spacing(2),
	},
}));

const Certificates = (props) => {
	const [certificate, setCertificates] = React.useState([]);
	const classes = useStyles();
	const getData = () => {
		certificateService
			.getProducts()
			.then((res) => {
				console.log(res.certificate);
				setCertificates(res.certificate);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	// getData();
	React.useEffect(getData, []);
	// console.log("Inside Products Component");
	const handleNewProductClick = () => {
		console.log(props);
		props.history.push("/certificates/new");
	};
	return (
		<div>
			<h1
				style={{
					paddingTop: "3rem",
					color: "tomato	",
					paddingBottom: "2rem",
				}}
			>
				Certifications
			</h1>
			<Fab
				color="primary"
				aria-label="add"
				className={classes.addBtn}
				onClick={handleNewProductClick}
			>
				<AddIcon />
			</Fab>
			{certificate.length == 0 ? (
				<p>There are no certificates</p>
			) : (
				<Grid container spacing={3}>
					{certificate.map((certificate, index) => (
						<SingleCertificate
							key={index}
							certificate={certificate}
							onDelete={getData}
						/>
					))}
				</Grid>
			)}
		</div>
	);
};

export default Certificates;
