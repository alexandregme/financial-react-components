export const AppIsFetching = (fetchingLocal = false) => ({
  type: 'APP_IS_FETCHING',
  fetchingLocal,
});

export const FetchIsDone = () => ({
  type: 'FETCH_IS_DONE',
});

export const OpenModalWithId = (modal, { currentTarget }) => ({
  type: 'OPEN_MODAL',
  modal,
  id: parseInt(currentTarget.id, 10),
});

export const OpenModal = (modal) => ({
  type: 'OPEN_MODAL',
  modal,
  id: null,
});

export const CloseModal = () => ({
  type: 'CLOSE_MODAL',
});

export const SetDefaultMessage = (message) => ({
  type: 'SET_DEFAULT_MESSAGE',
  messageType: 'error',
  message,
});

export const SetSuccessMessage = (message) => ({
  type: 'SET_SUCCESS_MESSAGE',
  messageType: 'success',
  message,
});

export const RemoveMessage = () => ({
  type: 'REMOVE_MESSAGE',
});
