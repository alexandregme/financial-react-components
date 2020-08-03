import deepFreeze from 'deep-freeze';
import {
  GetFetchingStatus,
  GetFetchingLocal,
  IsModalOpen,
  HasOpenModal,
  GetModalLineItem,
  GetMessage,
  GetMessageType,
} from 'selectors/app/index';
import { DEFAULT_APP_STATE, STORE } from 'shared/store';

describe('User Selector', () => {
  it('should return if the app is fetching from redux store', () => {
    deepFreeze(STORE);
    expect(GetFetchingStatus(STORE)).toEqual(STORE.app.fetching);
  });

  it('should return if the app is fetching local from redux store', () => {
    deepFreeze(STORE);
    expect(GetFetchingLocal(STORE)).toEqual(STORE.app.fetchingLocal);
  });

  it('should return the status IsModalOpen from redux store', () => {
    deepFreeze(STORE);
    expect(IsModalOpen(STORE, null)).toBeTruthy();
    expect(IsModalOpen(STORE, 'modal')).toBeFalsy();
    const modifiedStore = { app: { ...DEFAULT_APP_STATE, modal: 'open' } };
    expect(IsModalOpen(modifiedStore, 'open')).toBeTruthy();
  });

  it('should return the status HasOpenModal from redux store', () => {
    const modifiedStore = { app: { ...DEFAULT_APP_STATE, modal: 'open' } };
    deepFreeze(modifiedStore);
    expect(HasOpenModal(modifiedStore)).toBeTruthy();
    deepFreeze(STORE);
    expect(HasOpenModal(STORE)).toBeFalsy();
  });

  it('should return the line from modal interaction from redux store', () => {
    deepFreeze(STORE);
    expect(GetModalLineItem(STORE)).toEqual(STORE.app.modalLineItem);
  });

  it('should return the status message from redux store', () => {
    deepFreeze(STORE);
    expect(GetMessage(STORE)).toEqual(STORE.app.message);
  });

  it('should return the status message from redux store', () => {
    deepFreeze(STORE);
    expect(GetMessageType(STORE)).toEqual(STORE.app.messageType);
  });
});
