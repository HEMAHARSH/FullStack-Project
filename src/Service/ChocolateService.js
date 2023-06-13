import axios from 'axios';

const CHOCOLATE_API_BASED_URL ="http://localhost:8080/chocolatelist";

class ChocolateService {

    getChocolates(){
        return axios.get(CHOCOLATE_API_BASED_URL);
    }

    createChocolates(chocolate){
        return axios.post(CHOCOLATE_API_BASED_URL, chocolate);
    }

    getChocolateById(chocolateId){
        return axios.get(CHOCOLATE_API_BASED_URL + '/' + chocolateId);
    }

    updateChocolate(chocolateId, chocolate){
        return axios.put(CHOCOLATE_API_BASED_URL + '/' + chocolateId, chocolate);
    }

    deleteChocolate(chocolateId){
        return axios.delete(CHOCOLATE_API_BASED_URL + '/' + chocolateId);
    }
}

export default new ChocolateService()