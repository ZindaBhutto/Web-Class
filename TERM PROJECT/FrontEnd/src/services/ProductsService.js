import GenericService from "./GenericService";
class ProductsService extends GenericService {
	constructor() {
		super();
	}
	addProduct = (data) => this.post("educations", data);
	deleteProduct = (_id) => this.delete("educations/" + _id);
	updateProduct = (_id, data) => this.put("educations/" + _id, data);
	getProducts = () => this.get("educations/");
	getSingleProduct = (id) => this.get("educations/" + id);
}

let productService = new ProductsService();
export default productService;
