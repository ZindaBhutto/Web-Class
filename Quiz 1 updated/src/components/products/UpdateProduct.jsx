import React from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import productService from "./ProductsService";
const UpdateProduct = (props) => {
	const [title, setTitle] = React.useState("");
	const [body, setBody] = React.useState("");
	const id = props.match.params.id;
	React.useEffect(() => {
		productService.getSingleProduct(id).then((data) => {
		  setTitle(data.title);
		  setBody(data.body);
		});
	  }, []);
	// THIS ONE IS MINE
	return (
		<Grid container spacing={3}>
			<Grid item xs={12}>
				<h1>Update Recipe</h1>
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
              .updateProduct(id, { title, body })
              .then((data) => {
                console.log(data);
                props.history.push("/recipes");
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
