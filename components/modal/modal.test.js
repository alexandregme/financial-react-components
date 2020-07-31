import React from 'react';
import { shallow, mount } from 'enzyme';
import Modal from 'components/modal';

describe('Modal', () => {
  let mountedModal;

  beforeEach(() => {
    mountedModal = mount(<Modal />);
  });

  it('renders without crashing', () => {
    shallow(<Modal />);
    expect(mountedModal).toMatchSnapshot();
  });

  it('expected default props', () => {
    expect(mountedModal.props().show).toEqual(false);
    expect(mountedModal.props().title).toEqual('default title');
    expect(mountedModal.props().children).toEqual(<span />);
    expect(mountedModal.props().handleClose()).toBeUndefined();
  });

  it('expected not to have modal backdrop when show is false', () => {
    const modalBackdrop = mountedModal.find('div[className="modal-backdrop fade show"]');
    expect(modalBackdrop).toHaveLength(0);
  });

  it('expected not to have configuration for content', () => {
    expect(mountedModal.find('div.modal.fade.show')).toHaveLength(0);
    expect(mountedModal.find('div.modal-dialog.modal-dialog-centered')).toHaveLength(0);
    expect(mountedModal.find('div.modal-content')).toHaveLength(0);
  });
});

describe('Modal custom props', () => {
  let mountedModal;

  const props = {
    show: true,
    title: 'custom title',
    children: <p />,
    handleClose: () => 'handleClose',
  };

  beforeEach(() => {
    mountedModal = mount(<Modal {...props} />);
  });

  it('expected to have modal backdrop when show is true', () => {
    const modalBackdrop = mountedModal.find('div[className="modal-backdrop fade show"]');
    expect(modalBackdrop).toHaveLength(1);
  });

  it('expected to default configuration for content', () => {
    expect(mountedModal.find('div.modal.fade.show')).toHaveLength(1);
    expect(mountedModal.find('div.modal-dialog.modal-dialog-centered')).toHaveLength(1);
    expect(mountedModal.find('div.modal-content')).toHaveLength(1);
  });

  it('expected to default configuration for header', () => {
    expect(mountedModal.find('div[className="modal-header"]')).toHaveLength(1);
    const modalTitle = mountedModal.find('h5[className="modal-title"]');
    expect(modalTitle).toHaveLength(1);
    expect(modalTitle.text()).toEqual(props.title);
    expect(mountedModal.find('Button[className="btn-secondary close"]')).toHaveLength(1);
  });

  it('expected to default configuration for body', () => {
    const modalBody = mountedModal.find('div[className="modal-body"]');
    expect(modalBody).toHaveLength(1);
    expect(modalBody.find('p')).toHaveLength(1);
  });

  it('expected to default configuration for footer', () => {
    expect(mountedModal.find('div[className="modal-footer"]')).toHaveLength(1);
    expect(mountedModal.find('Button[className="btn-secondary"]')).toHaveLength(1);
  });

  it('expected for close button handleClick', () => {
    const closeButton = mountedModal.find('Button[className="btn-secondary close"]');
    expect(closeButton.props().handleClick()).toEqual(props.handleClose());
  });

  it('expected for cancel button handleClick', () => {
    const cancelButton = mountedModal.find('Button[className="btn-secondary"]');
    expect(cancelButton.props().handleClick()).toEqual(props.handleClose());
  });

  it('expect to have an SVGIconX component ', () => {
    const svgIconX = mountedModal.find('SVGIconX');
    expect(svgIconX).toHaveLength(1);
  });
});
