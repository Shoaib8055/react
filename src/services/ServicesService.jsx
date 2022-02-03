import axios from 'axios'

const SERVICES_REST_API_URL = "a217fabb187a34096851550a46373860-1466940499.us-east-1.elb.amazonaws.com/services";

class ServicesService {

    getServices(){
        return axios.get(SERVICES_REST_API_URL + '/allservices');
    }

    createServices(services){
        return axios.post(SERVICES_REST_API_URL + "/addService", services);
    }

    getServicesById(servicesId){
        return axios.get(SERVICES_REST_API_URL + `/ById/${servicesId}`);
    }

    updateServices(servicesId, services){
        return axios.put(SERVICES_REST_API_URL + `/update/${servicesId}`, services);
    }

    getServicesByCategory(servicesCategory){
        return axios.get(SERVICES_REST_API_URL + `/${servicesCategory}`);
    }

    deleteServices(servicesId){
        return axios.delete(SERVICES_REST_API_URL + `/delete/${servicesId}`);
    }
}

export default new ServicesService();