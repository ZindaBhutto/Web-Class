import GenericService from "./GenericService";
class ProductsService extends GenericService {
	constructor() {
		super();
	}
	addProduct = (data) => this.post("/", data);
	deleteProduct = (_id) => this.delete("/" + _id);
	updateProduct = (_id, data) => this.put("/" + _id, data);
	getProducts = () => this.get("/");
	getSingleProduct = (id) => this.get("/" + id);
}

let productService = new ProductsService();
export default productService;
