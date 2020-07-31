import React from 'react';
import { shallow } from 'enzyme';
import Loader from './loader';

describe('Loader', () => {
  let mountedLoader;

  beforeEach(() => {
    mountedLoader = shallow(<Loader />);
  });

  it('renders without crashing', () => {
    shallow(<Loader />);
    expect(mountedLoader).toMatchSnapshot();
  });

  it('expect to do not have an wrap div element with default props', () => {
    expect(mountedLoader.find('div[className="loader"]')).toHaveLength(0);
  });

  it('expect to do not have an svg element with default props', () => {
    const svgLoader = mountedLoader.find('svg[className="default-spinner"]');
    expect(svgLoader).toHaveLength(0);
  });
});

describe('Loader custom props - Fetching', () => {
  let mountedLoader;

  const props = {
    fetching: true,
  };

  beforeEach(() => {
    mountedLoader = shallow(<Loader {...props} />);
  });

  it('expect to have an wrap div element', () => {
    expect(mountedLoader.find('div[className="loader"]')).toHaveLength(1);
  });

  it('expect to have an SVGLoader component when the user does no pass the children', () => {
    const svgLoader = mountedLoader.find('SVGLoader[className="default-spinner"]');
    expect(svgLoader).toHaveLength(1);
  });

  it('expect the custom loader to be hidden', () => {
    const customLoader = mountedLoader.find('div[className="custom-loader"]');
    expect(customLoader).toHaveLength(0);
  });
});

describe('Loader custom props - Custom Loader', () => {
  let mountedLoader;

  const props = {
    fetching: true,
    children: <div className="custom-loader"> </div>,
  };

  beforeEach(() => {
    mountedLoader = shallow(<Loader {...props} />);
  });

  it('expect to have an wrap div element', () => {
    expect(mountedLoader.find('div[className="loader"]')).toHaveLength(1);
  });

  it('expect the loader SVGLoader to be hidden', () => {
    const svgLoader = mountedLoader.find('SVGLoader[className="default-spinner"]');
    expect(svgLoader).toHaveLength(0);
  });

  it('expect to have an custom loader component', () => {
    const customLoader = mountedLoader.find('div[className="custom-loader"]');
    expect(customLoader).toHaveLength(1);
  });
});

describe('Loader custom props - Fetching Local', () => {
  let mountedLoader;

  const props = {
    fetching: true,
    fetchingLocal: true,
  };

  beforeEach(() => {
    mountedLoader = shallow(<Loader {...props} />);
  });

  it('expect to have an wrap div element', () => {
    expect(mountedLoader.find('div[className="loader"]')).toHaveLength(0);
  });

  it('expect the loader SVGLoader to be hidden', () => {
    const svgLoader = mountedLoader.find('SVGLoader[className="default-spinner"]');
    expect(svgLoader).toHaveLength(0);
  });

  it('expect the custom loader to be hidden', () => {
    const customLoader = mountedLoader.find('div[className="custom-loader"]');
    expect(customLoader).toHaveLength(0);
  });
});
