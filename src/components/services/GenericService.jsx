
import axios from "axios";
axios.defaults.baseURL = "http://localhost:4000/api/"; //fetch dara
axios.defaults.headers.common["x-auth-token"] = localStorage.getItem("token"); //get auth token
axios.defaults.headers.common['Content-Type'] = 'multipart/form-data'; //get form data
class GenericService {
    constructor() {}
    get = (url) => 
    new Promise((resolve, reject) => {
        axios
            .get(url)
            .then((res) => {
                resolve(res.data);
            })
            .catch((err) => {
                reject(err);
            });
    });
    post = (url,data) => 
    new Promise((resolve, reject) => {
        axios
            .post(url,data)
            .then((res) => {
                resolve(res.data);
            })
            .catch((err) => {
                reject(err);
            });
    });
    delete = (url) => 
    new Promise((resolve, reject) => {
        axios
            .delete(url)
            .then((res) => {
                resolve(res.data);
            })
            .catch((err) => {
                reject(err);
            });
    });
    put = (url,data) => new Promise((resolve, reject) => {
        axios
            .put(url,data)
            .then((res) => {
                resolve(res.data);
            })
            .catch((err) => {
                reject(err);
            });
    });
}
 
export default GenericService;