import api from "./api";

const getDataSets = {
  chart: () => {
    return api.get('/api/v1/average-rainfall')
  },
  cards: () => {
    return api.get('api/v1/average-metrics')
  }
};

export default getDataSets;
