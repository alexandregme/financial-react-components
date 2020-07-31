import React from 'react';
import { shallow, mount } from 'enzyme';
import Alert from 'components/alert';

describe('Alert', () => {
  let mountedAlert;
  let alertContainer;
  let closeButton;

  beforeEach(() => {
    mountedAlert = shallow(<Alert />);
    alertContainer = mountedAlert.find('div');
    closeButton = alertContainer.find('button[className="close"]');
  });

  it('renders without crashing', () => {
    shallow(<Alert />);
    expect(mountedAlert).toMatchSnapshot();
  });

  it('Contains a container div to hold the alert', () => {
    expect(alertContainer).toHaveLength(1);
    expect(alertContainer.prop('className')).toEqual('alert alert-danger');
    expect(alertContainer.text()).toEqual('×');
  });

  it('expect span to hold the message', () => {
    const spanMessage = alertContainer.find('span[className="message"]');
    expect(spanMessage).toHaveLength(1);
    expect(spanMessage.text()).toEqual('');
  });

  it('expect a close button inside alert container', () => {
    expect(closeButton).toHaveLength(1);
    expect(closeButton.text()).toEqual('×');
    expect(closeButton.props().type).toEqual('button');
    expect(closeButton.props().onClick()).toBe(undefined);
    const spanInsideButton = closeButton.find('span');
    expect(spanInsideButton).toHaveLength(1);
    expect(spanInsideButton.prop('aria-hidden')).toEqual('true');
  });

  it('call a function passed to it when clicked', () => {
    const mockCallBack = jest.fn();
    const mountedAlertWithCallback = shallow(<Alert onButtonClick={mockCallBack} />);
    mountedAlertWithCallback.find('button').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});

describe('Alert custom props', () => {
  let mountedAlert;
  let alertContainer;

  const props = {
    alertMessage: 'custom label',
    className: 'custom',
    messageType: 'success',
    onButtonClick: () => 'onButtonClick',
  };

  beforeEach(() => {
    mountedAlert = mount(<Alert {...props} />);
    alertContainer = mountedAlert.find('div');
  });

  it('should receive a prop text and show it as label', () => {
    expect(alertContainer.text()).toEqual(`${props.alertMessage}×`);
  });

  it('expect to add a custom className to label', () => {
    expect(alertContainer.prop('className')).toEqual('alert custom alert-success');
  });
});
