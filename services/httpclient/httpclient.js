import axios from 'axios';
import { AppIsFetching, FetchIsDone, SetDefaultMessage } from 'actions/app';

class HTTPClient {
  constructor(dispatch = () => {}) {
    this.dispatch = dispatch;
    this.baseUrl = 'http://mesverde.com.br';
    this.headers = {};
    this.fetchingLocal = false;
  }

  async get(url, success = () => {}, error = () => {}) {
    let result;
    this.dispatch(AppIsFetching(this.fetchingLocal));

    try {
      const response = await axios.get(`${this.baseUrl}${url}`);
      const { data } = response;
      await success(data);
      result = data;
    } catch (e) {
      this.dispatch(SetDefaultMessage(`Something went wrong with the server - ${e.message}`));
      error(e);
      result = [];
    } finally {
      await this.dispatch(FetchIsDone());
    }
    return result;
  }

  async post(url, payload = null, success = () => {}, error = () => {}) {
    let result;
    this.dispatch(AppIsFetching(this.fetchingLocal));

    try {
      let response;

      if (payload) {
        let data = { ...payload };

        if (payload.type) {
          data = new FormData();
          data.append('file', payload);
        }

        response = await axios.post(`${this.baseUrl}${url}`, data, { headers: this.headers });
      } else {
        response = await axios.post(`${this.baseUrl}${url}`, this.headers);
      }
      const { data } = response;
      await success(data);
      result = data;
    } catch (e) {
      this.dispatch(SetDefaultMessage(`Something went wrong with the server - ${e.message}`));
      error(e);
      result = [];
    } finally {
      await this.dispatch(FetchIsDone());
    }
    return result;
  }
}

export default HTTPClient;
