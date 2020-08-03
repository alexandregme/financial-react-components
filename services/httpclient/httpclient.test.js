import mockAxios from 'axios';
import ConfigureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { STORE } from 'shared/store';
import { AppIsFetching, FetchIsDone, SetDefaultMessage } from 'actions/app';
import HTTPClient from 'services/httpclient';

describe('HTTPClient', () => {
  let httpClient;

  beforeEach(() => {
    httpClient = new HTTPClient();
  });

  it('expect to HTTPClient have this default variables after constructor ', () => {
    expect(httpClient.baseUrl).toEqual('http://mesverde.com.br');
    expect(httpClient.dispatch).toBeDefined();
  });

  describe('HTTPClient GET', () => {
    it('Calls axios and expect that method GET is mocked without success callback', async () => {
      const result = await httpClient.get('/get');
      expect(result).toEqual('mock GET response');
      expect(mockAxios.get).toHaveBeenCalledTimes(1);
      expect(mockAxios.get).toHaveBeenCalledWith('http://mesverde.com.br/get');
    });

    it('Calls axios and expect that method GET with success callback', async () => {
      const successPromise = jest.fn(() => Promise.resolve());
      const result = await httpClient.get('/get', successPromise);
      expect(result).toEqual('mock GET response');
      expect(mockAxios.get).toHaveBeenCalledTimes(2);
      expect(mockAxios.get).toHaveBeenCalledWith('http://mesverde.com.br/get');
      expect(successPromise).toHaveBeenCalledTimes(1);
      expect(successPromise).toHaveBeenCalledWith(result);
    });
  });

  describe('HTTPClient POST', () => {
    it('Calls axios and expect that method POST without success callback', async () => {
      const result = await httpClient.post('/post');
      expect(result).toEqual('mock POST response');
      expect(mockAxios.post).toHaveBeenCalledTimes(1);
      expect(mockAxios.post).toHaveBeenCalledWith('http://mesverde.com.br/post', {});
    });

    it('Calls axios and expect that method POST with success callback', async () => {
      const successPromise = jest.fn(() => Promise.resolve());
      const result = await httpClient.post('/post', null, successPromise);
      expect(result).toEqual('mock POST response');
      expect(mockAxios.post).toHaveBeenCalledTimes(2);
      expect(mockAxios.post).toHaveBeenCalledWith('http://mesverde.com.br/post', {});
      expect(successPromise).toHaveBeenCalledTimes(1);
      expect(successPromise).toHaveBeenCalledWith(result);
    });

    it('Calls axios and expect that method POST with payload', async () => {
      const payload = { name: 'name' };
      const result = await httpClient.post('/post', payload);
      expect(result).toEqual('mock POST response');
      expect(mockAxios.post).toHaveBeenCalledTimes(3);
      expect(mockAxios.post).toHaveBeenCalledWith('http://mesverde.com.br/post', payload, { headers: {} });
    });

    it('Calls axios and expect that method POST with file', async () => {
      const payload = new File([''], 'file', { type: 'path' });
      const formData = new FormData();
      formData.append('file', payload);
      const result = await httpClient.post('/post', payload);
      expect(result).toEqual('mock POST response');
      expect(mockAxios.post).toHaveBeenCalledTimes(4);
      expect(mockAxios.post).toHaveBeenCalledWith('http://mesverde.com.br/post', formData, { headers: {} });
    });
  });
});

describe('HTTPClient handling errors', () => {
  let httpClient;

  beforeEach(() => {
    httpClient = new HTTPClient();
  });

  it('Calls axios and expect that method GET with error', async () => {
    const errorPromise = jest.fn(() => Promise.resolve());
    const error = new Error();
    mockAxios.get.mockImplementation(() => { throw error; });
    const result = await httpClient.get('/get', null, errorPromise);
    expect(result).toEqual([]);
    expect(mockAxios.get).toHaveBeenCalledTimes(3);
    expect(mockAxios.get).toHaveBeenCalledWith('http://mesverde.com.br/get');
    expect(errorPromise).toHaveBeenCalledTimes(1);
    expect(errorPromise).toHaveBeenCalledWith(error);
  });

  it('Calls axios and expect that method POST with error', async () => {
    const errorPromise = jest.fn(() => Promise.resolve());
    const error = new Error();
    mockAxios.post.mockImplementation(() => { throw error; });
    const result = await httpClient.post('/post', null, null, errorPromise);
    expect(result).toEqual([]);
    expect(mockAxios.post).toHaveBeenCalledTimes(5);
    expect(mockAxios.post).toHaveBeenCalledWith('http://mesverde.com.br/post', {});
    expect(errorPromise).toHaveBeenCalledTimes(1);
    expect(errorPromise).toHaveBeenCalledWith(error);
  });
});

describe('HTTPClient dispatch', () => {
  let httpClient;
  let mockStore;
  let store;
  let spyOnDispatch;
  let actionAppIsFetching;
  let actionFetchIsDone;

  beforeEach(() => {
    mockStore = ConfigureStore([thunk]);
    store = mockStore(STORE);
    httpClient = new HTTPClient(store.dispatch);
    actionAppIsFetching = AppIsFetching();
    actionFetchIsDone = FetchIsDone();
  });

  it('expect to HTTPClient have custom variables after constructor ', () => {
    expect(httpClient.dispatch).toEqual(store.dispatch);
  });

  it('expect to HTTPClient fire the actions to toggle fetching status to GET method', async () => {
    const actionSetDefaultMessage = SetDefaultMessage('Something went wrong with the server - ');
    spyOnDispatch = jest.spyOn(httpClient, 'dispatch');
    await httpClient.get('/');
    expect(spyOnDispatch).toHaveBeenCalledTimes(3);
    expect(spyOnDispatch).toHaveBeenCalledWith(actionAppIsFetching);
    expect(spyOnDispatch).toHaveBeenCalledWith(actionFetchIsDone);
    expect(spyOnDispatch).toHaveBeenCalledWith(actionSetDefaultMessage);
  });

  it('expect to HTTPClient fire the actions to toggle fetching status to POST method', async () => {
    const actionSetDefaultMessage = SetDefaultMessage('Something went wrong with the server - ');
    spyOnDispatch = jest.spyOn(httpClient, 'dispatch');
    await httpClient.post('/');
    expect(spyOnDispatch).toHaveBeenCalledTimes(3);
    expect(spyOnDispatch).toHaveBeenCalledWith(actionAppIsFetching);
    expect(spyOnDispatch).toHaveBeenCalledWith(actionFetchIsDone);
    expect(spyOnDispatch).toHaveBeenCalledWith(actionSetDefaultMessage);
  });
});
