const axios = {
  get: jest.fn(() => Promise.resolve({ data: 'mock GET response' })),
  post: jest.fn(() => Promise.resolve({ data: 'mock POST response' })),
};

export default axios;
