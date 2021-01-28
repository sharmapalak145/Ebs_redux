import axios from "axios";

const CAPI_URL = "http://localhost:8069/customer/";
const API_URL = "http://localhost:8069/admin/";

class AuthService {
  login(username, password) {
    return axios.post(CAPI_URL + `login?username=${username}&password=${password}`)
  }

  register(custName, custAddress, custPassword) {
    return axios.post(CAPI_URL + "register", {
      custName,
      custAddress,
      custPassword
    });
  }

  adlogin(username, password){
     return axios.post(API_URL + `adlogin?username=${username}&password=${password}`)
   }

}

export default new AuthService();