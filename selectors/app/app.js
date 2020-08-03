export const GetFetchingStatus = (state) => state.app.fetching;

export const GetFetchingLocal = (state) => state.app.fetchingLocal;

export const IsModalOpen = (state, modal) => state.app.modal === modal;

export const HasOpenModal = (state) => state.app.modal !== null;

export const GetModalLineItem = (state) => state.app.modalLineItem;

export const GetMessage = (state) => state.app.message;

export const GetMessageType = (state) => state.app.messageType;
