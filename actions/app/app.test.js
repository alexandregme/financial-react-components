import {
  AppIsFetching,
  FetchIsDone,
  OpenModal,
  OpenModalWithId,
  CloseModal,
  SetDefaultMessage,
  RemoveMessage,
  SetSuccessMessage,
} from 'actions/app';

describe('App Action', () => {
  describe('Fetch', () => {
    it('should create an action to change the app to fetching', () => {
      const expectedAction = {
        type: 'APP_IS_FETCHING',
        fetchingLocal: true,
      };

      expect(AppIsFetching(true)).toEqual(expectedAction);
    });

    it('should create an action to change the app to not fetching', () => {
      const expectedAction = {
        type: 'FETCH_IS_DONE',
      };

      expect(FetchIsDone()).toEqual(expectedAction);
    });
  });

  describe('Modal', () => {
    it('should create an action to open the modal', () => {
      const expectedAction = {
        type: 'OPEN_MODAL',
        modal: 'modal',
        id: null,
      };

      expect(OpenModal('modal')).toEqual(expectedAction);
    });

    it('should create an action to open the modal with id', () => {
      const elementString = { currentTarget: { id: '0' } };
      const elementInteger = { currentTarget: { id: 0 } };
      const expectedAction = {
        type: 'OPEN_MODAL',
        modal: 'modal',
        id: 0,
      };

      expect(OpenModalWithId('modal', elementString)).toEqual(expectedAction);
      expect(OpenModalWithId('modal', elementInteger)).toEqual(expectedAction);
    });

    it('should create an action to close the modal', () => {
      const expectedAction = {
        type: 'CLOSE_MODAL',
      };

      expect(CloseModal()).toEqual(expectedAction);
    });
  });

  describe('Message', () => {
    it('should create an action to set the default message', () => {
      const expectedAction = {
        type: 'SET_DEFAULT_MESSAGE',
        messageType: 'error',
        message: 'message',
      };

      expect(SetDefaultMessage('message')).toEqual(expectedAction);
    });

    it('should create an action to set a success message', () => {
      const expectedAction = {
        type: 'SET_SUCCESS_MESSAGE',
        messageType: 'success',
        message: 'message',
      };

      expect(SetSuccessMessage('message')).toEqual(expectedAction);
    });

    it('should create an action to set the status message', () => {
      const expectedAction = {
        type: 'REMOVE_MESSAGE',
      };

      expect(RemoveMessage()).toEqual(expectedAction);
    });
  });
});
