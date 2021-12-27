import GenericService from "./GenericService";
import GenericServiceCertificate from "./GenericServiceCertificate";
class CertificateService extends GenericServiceCertificate {
	constructor() {
		super();
	}
	addProduct = (data) => this.post("certificates", data);
	deleteProduct = (_id) => this.delete("certificates/" + _id);
	updateProduct = (_id, data) => this.put("certificates/" + _id, data);
	getProducts = () => this.get("certificates/");
	getSingleProduct = (id) => this.get("certificates/" + id);
}

let certificateService = new CertificateService();
export default certificateService;
