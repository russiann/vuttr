import axios from 'axios';

const API_ENDPOINT = 'http://localhost:3000';

const tools = {
  async find({searchText, filterOnlyInTags}) {
    const {data} = await axios.get(`${API_ENDPOINT}/tools`, {
      params: {
        q: searchText,
        tags_like: filterOnlyInTags ? searchText : undefined
      }
    });
    return data;
  },

  async create(data) {
    const response = await axios.post(`${API_ENDPOINT}/tools`, data);
    return response.data;
  },

  async remove(id) {
    const {data} = await axios.delete(`${API_ENDPOINT}/tools/${id}`);
    return data;
  }
};

export default tools;
