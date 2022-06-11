import GenericService from "./GenericService";
class ProductsService extends GenericService {
    constructor() {
        super();
    }
    addProduct = (data) => this.post("products",data);
    deleteProduct = (_id) => this.delete("products/"+_id);
    updateProduct = (_id,data) => this.put("products/"+_id,data);
    getProduct = () => this.get("products"); 
    getSingleProduct = (id) => this.get("products/"+id);     
}
let productsService = new ProductsService();
export default productsService;