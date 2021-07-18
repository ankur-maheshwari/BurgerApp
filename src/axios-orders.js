import axios from 'axios';

const instance = axios.create({
    // url use to store data
    baseURL: 'https://react-my-burger-c54b1-default-rtdb.firebaseio.com/'
});

export default instance;


/// burgerbuilder line no. 105 uses axio.post('/orders.json) for firebase ('orders.json )
/// it will automatically form a table in firebase bt it is mandatory to use .json extension