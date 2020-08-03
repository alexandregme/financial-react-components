import { DEFAULT_APP_STATE } from 'shared/store';

export const IsAppFetching = (modifiedApp) => modifiedApp.fetchingCalls > 0;

export const SetFetchingLocal = (modifiedApp, fetchingLocal) => {
  if (modifiedApp.fetching) {
    return modifiedApp.fetchingLocal ? modifiedApp.fetchingLocal : fetchingLocal;
  }
  return false;
};

const App = (state = DEFAULT_APP_STATE, action) => {
  const modifiedApp = { ...state };

  switch (action.type) {
    case 'APP_IS_FETCHING':
      modifiedApp.fetchingCalls += 1;
      modifiedApp.fetching = IsAppFetching(modifiedApp);
      modifiedApp.fetchingLocal = SetFetchingLocal(modifiedApp, action.fetchingLocal);
      return modifiedApp;
    case 'FETCH_IS_DONE':
      modifiedApp.fetchingCalls -= 1;
      modifiedApp.fetching = IsAppFetching(modifiedApp);
      modifiedApp.fetchingLocal = SetFetchingLocal(modifiedApp, modifiedApp.fetchingLocal);
      return modifiedApp;
    case 'OPEN_MODAL':
      modifiedApp.modal = action.modal;
      modifiedApp.modalLineItem = action.id;
      return modifiedApp;
    case 'CLOSE_MODAL':
      modifiedApp.modal = null;
      modifiedApp.modalLineItem = null;
      return modifiedApp;
    case 'SET_DEFAULT_MESSAGE':
      modifiedApp.message = action.message;
      modifiedApp.messageType = action.messageType;
      return modifiedApp;
    case 'SET_SUCCESS_MESSAGE':
      modifiedApp.message = action.message;
      modifiedApp.messageType = action.messageType;
      return modifiedApp;
    case 'REMOVE_MESSAGE':
      modifiedApp.message = '';
      modifiedApp.messageType = '';
      return modifiedApp;
    default:
      return state;
  }
};

export default App;
