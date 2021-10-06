import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://front-test.beta.aviasales.ru/',
});

const aviaTickets = {
  getSearchId: () => instance.get('search').then(res => res.data),
  getTickets: userId => instance.get(`tickets?searchId=${userId}`).then(res => res.data),
};

export default aviaTickets;