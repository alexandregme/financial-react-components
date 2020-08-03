import deepFreeze from 'deep-freeze';
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
import { DEFAULT_APP_STATE } from 'shared/store';
import App, { IsAppFetching, SetFetchingLocal } from 'reducers/app';

describe('App Reducer', () => {
  let appBefore;
  let appAfter;
  let actionAppIsFetching;
  let actionFetchIsDone;
  describe('Default', () => {
    it('should handle return default state', () => {
      actionAppIsFetching = { type: 'DEFAULT' };

      appBefore = DEFAULT_APP_STATE;
      appAfter = DEFAULT_APP_STATE;

      deepFreeze(appBefore);
      deepFreeze(actionAppIsFetching);
      expect(App(undefined, actionAppIsFetching)).toEqual(appAfter);
      expect(App(appBefore, actionAppIsFetching)).toEqual(appAfter);
    });
  });
  describe('Fetching', () => {
    it('should handle APP_IS_FETCHING with deepFreeze mutation when local is fetching local', () => {
      actionAppIsFetching = AppIsFetching();

      appBefore = DEFAULT_APP_STATE;
      appAfter = {
        ...DEFAULT_APP_STATE, fetchingCalls: 1, fetching: true, fetchingLocal: false,
      };

      deepFreeze(appBefore);
      deepFreeze(actionAppIsFetching);

      expect(App(appBefore, actionAppIsFetching)).toEqual(appAfter);
    });

    it('should handle APP_IS_FETCHING with deepFreeze mutation when local not is fetching local', () => {
      actionAppIsFetching = AppIsFetching(true);
      appBefore = DEFAULT_APP_STATE;
      appAfter = {
        ...DEFAULT_APP_STATE, fetchingCalls: 1, fetching: true, fetchingLocal: true,
      };

      deepFreeze(appBefore);
      deepFreeze(actionAppIsFetching);

      expect(App(appBefore, actionAppIsFetching)).toEqual(appAfter);
    });

    it('should handle FETCH_IS_DONE with deepFreeze mutation when local is fetching local', () => {
      actionFetchIsDone = FetchIsDone();

      appBefore = {
        ...DEFAULT_APP_STATE, fetchingCalls: 1, fetching: true, fetchingLocal: true,
      };
      appAfter = DEFAULT_APP_STATE;

      deepFreeze(appBefore);
      deepFreeze(actionFetchIsDone);

      expect(App(appBefore, actionFetchIsDone)).toEqual(appAfter);
    });

    it('should handle FETCH_IS_DONE with deepFreeze mutation when local is not fetching local', () => {
      actionFetchIsDone = FetchIsDone();

      appBefore = {
        ...DEFAULT_APP_STATE, fetchingCalls: 1, fetching: true, fetchingLocal: false,
      };
      appAfter = DEFAULT_APP_STATE;

      deepFreeze(appBefore);
      deepFreeze(actionFetchIsDone);

      expect(App(appBefore, actionFetchIsDone)).toEqual(appAfter);
    });

    it('should return true is the app has multiple calls and return false when all calls are resolved', () => {
      const appWithOneCall = { fetchingCalls: 1, fetchingLocal: false };
      const appWithTwoCalls = { fetchingCalls: 2, fetchingLocal: false };
      const appWithoutCalls = DEFAULT_APP_STATE;

      expect(IsAppFetching(appWithOneCall)).toBeTruthy();
      expect(IsAppFetching(appWithTwoCalls)).toBeTruthy();
      expect(IsAppFetching(appWithoutCalls)).toBeFalsy();
    });

    it('should return maintain the logic for fetching local calls', () => {
      const appFetchingLocalFalse = { fetching: true, fetchingLocal: false, message: '' };
      const appFetchingLocalTrue = { fetching: true, fetchingLocal: true, message: '' };

      expect(SetFetchingLocal(appFetchingLocalFalse, true)).toBeTruthy();
      expect(SetFetchingLocal(appFetchingLocalFalse, false)).toBeFalsy();
      expect(SetFetchingLocal(appFetchingLocalTrue, true)).toBeTruthy();
      expect(SetFetchingLocal(appFetchingLocalTrue, false)).toBeTruthy();
    });

    it('should handle app fetching for multiple calls', () => {
      actionAppIsFetching = AppIsFetching();
      actionFetchIsDone = FetchIsDone();

      const expectedFirstIsFetching = {
        ...DEFAULT_APP_STATE, fetchingCalls: 1, fetching: true, fetchingLocal: false,
      };
      const resultFirstCall = App(DEFAULT_APP_STATE, actionAppIsFetching);
      expect(resultFirstCall).toEqual(expectedFirstIsFetching);

      const expectedSecondIsFetching = { ...expectedFirstIsFetching, fetchingCalls: 2 };
      const resultSecondCall = App(resultFirstCall, actionAppIsFetching);
      expect(resultSecondCall).toEqual(expectedSecondIsFetching);

      const expectedThirdIsFetching = { ...expectedSecondIsFetching, fetchingCalls: 3 };
      const resultThirdCall = App(resultSecondCall, actionAppIsFetching);
      expect(resultThirdCall).toEqual(expectedThirdIsFetching);

      const expectedFirstFetchDone = { ...expectedThirdIsFetching, fetchingCalls: 2 };
      const resultFourthCall = App(resultThirdCall, actionFetchIsDone);
      expect(resultFourthCall).toEqual(expectedFirstFetchDone);

      const expectedFourthIsFetching = { ...expectedFirstFetchDone, fetchingCalls: 3 };
      const resultFifthCall = App(resultFourthCall, actionAppIsFetching);
      expect(resultFifthCall).toEqual(expectedFourthIsFetching);

      const expectedSecondFetchDone = { ...expectedFourthIsFetching, fetchingCalls: 2 };
      const resultSixthCall = App(resultFifthCall, actionFetchIsDone);
      expect(resultSixthCall).toEqual(expectedSecondFetchDone);

      const expectedThirdFetchDone = { ...expectedSecondFetchDone, fetchingCalls: 1 };
      const resultSeventhCall = App(resultSixthCall, actionFetchIsDone);
      expect(resultSeventhCall).toEqual(expectedThirdFetchDone);

      const expectedFourthFetchDone = DEFAULT_APP_STATE;
      const resultEighthCall = App(resultSeventhCall, actionFetchIsDone);
      expect(resultEighthCall).toEqual(expectedFourthFetchDone);
    });

    it('should keep local state if is already set', () => {
      const expectedFirstLocalFalse = {
        ...DEFAULT_APP_STATE, fetchingCalls: 1, fetching: true, fetchingLocal: false,
      };
      const resultFirstCall = App(DEFAULT_APP_STATE, AppIsFetching());
      expect(resultFirstCall).toEqual(expectedFirstLocalFalse);

      const expectedSecondIsFetching = {
        ...expectedFirstLocalFalse, fetchingCalls: 2, fetchingLocal: true,
      };
      const resultSecondCall = App(resultFirstCall, AppIsFetching(true));
      expect(resultSecondCall).toEqual(expectedSecondIsFetching);

      const expectedThirdIsFetching = {
        ...expectedSecondIsFetching, fetchingCalls: 3, fetchingLocal: true,
      };
      const resultThirdCall = App(resultSecondCall, AppIsFetching());
      expect(resultThirdCall).toEqual(expectedThirdIsFetching);

      const expectedFirstFetchDone = {
        ...expectedThirdIsFetching, fetchingCalls: 2, fetchingLocal: true,
      };
      const resultFourthCall = App(resultThirdCall, FetchIsDone());
      expect(resultFourthCall).toEqual(expectedFirstFetchDone);

      const expectedFourthIsFetching = {
        ...expectedFirstFetchDone, fetchingCalls: 3, fetchingLocal: true,
      };
      const resultFifthCall = App(resultFourthCall, AppIsFetching());
      expect(resultFifthCall).toEqual(expectedFourthIsFetching);

      const expectedSecondFetchDone = {
        ...expectedFourthIsFetching, fetchingCalls: 2, fetchingLocal: true,
      };
      const resultSixthCall = App(resultFifthCall, FetchIsDone());
      expect(resultSixthCall).toEqual(expectedSecondFetchDone);

      const expectedThirdFetchDone = {
        ...expectedSecondFetchDone, fetchingCalls: 1, fetchingLocal: true,
      };
      const resultSeventhCall = App(resultSixthCall, FetchIsDone());
      expect(resultSeventhCall).toEqual(expectedThirdFetchDone);

      const expectedFourthFetchDone = DEFAULT_APP_STATE;
      const resultEighthCall = App(resultSeventhCall, FetchIsDone());
      expect(resultEighthCall).toEqual(expectedFourthFetchDone);
    });
  });
  describe('Modal', () => {
    it('should handle OPEN_MODAL OpenModal with deepFreeze mutation', () => {
      const actionOpenModal = OpenModal('modal');

      appBefore = DEFAULT_APP_STATE;
      appAfter = { ...DEFAULT_APP_STATE, modal: 'modal' };

      deepFreeze(appBefore);
      deepFreeze(actionOpenModal);

      expect(App(appBefore, actionOpenModal)).toEqual(appAfter);
    });

    it('should handle OPEN_MODAL OpenModalWithId - with deepFreeze mutation', () => {
      const element = { currentTarget: { id: 0 } };
      const actionOpenModal = OpenModalWithId('modal', element);

      appBefore = DEFAULT_APP_STATE;
      appAfter = { ...DEFAULT_APP_STATE, modal: 'modal', modalLineItem: element.currentTarget.id };

      deepFreeze(appBefore);
      deepFreeze(actionOpenModal);

      expect(App(appBefore, actionOpenModal)).toEqual(appAfter);
    });

    it('should handle CLOSE_MODAL with deepFreeze mutation', () => {
      const actionCloseModal = CloseModal();

      appBefore = { ...DEFAULT_APP_STATE, modal: 'modal' };
      appAfter = DEFAULT_APP_STATE;

      deepFreeze(appBefore);
      deepFreeze(actionCloseModal);

      expect(App(appBefore, actionCloseModal)).toEqual(appAfter);
    });
  });
  describe('Message', () => {
    it('should handle SET_DEFAULT_MESSAGE with deepFreeze mutation', () => {
      const actionSetDefaultMessage = SetDefaultMessage('message');

      appBefore = DEFAULT_APP_STATE;
      appAfter = { ...DEFAULT_APP_STATE, message: 'message', messageType: 'error' };

      deepFreeze(appBefore);
      deepFreeze(actionSetDefaultMessage);

      expect(App(appBefore, actionSetDefaultMessage)).toEqual(appAfter);
    });

    it('should handle SET_SUCCESS_MESSAGE with deepFreeze mutation', () => {
      const actionSetDefaultMessage = SetSuccessMessage('message');

      appBefore = DEFAULT_APP_STATE;
      appAfter = { ...DEFAULT_APP_STATE, message: 'message', messageType: 'success' };

      deepFreeze(appBefore);
      deepFreeze(actionSetDefaultMessage);

      expect(App(appBefore, actionSetDefaultMessage)).toEqual(appAfter);
    });

    it('should handle REMOVE_STATUS_MESSAGE with deepFreeze mutation', () => {
      const actionRemoveMessage = RemoveMessage();

      appBefore = { ...DEFAULT_APP_STATE, message: 'message' };
      appAfter = DEFAULT_APP_STATE;

      deepFreeze(appBefore);
      deepFreeze(actionRemoveMessage);

      expect(App(appBefore, actionRemoveMessage)).toEqual(appAfter);
    });
  });
});
