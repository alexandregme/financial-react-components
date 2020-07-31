import React from 'react';
import { shallow, mount } from 'enzyme';
import Table from 'components/table';

describe('Table', () => {
  let mountedTable;
  let table;

  beforeEach(() => {
    mountedTable = shallow(<Table />);
    table = mountedTable.find('table');
  });

  it('renders without crashing', () => {
    shallow(<Table />);
    expect(mountedTable).toMatchSnapshot();
  });

  it('contains a form element', () => {
    expect(table).toHaveLength(1);
  });

  it('expect label have table table wrapper', () => {
    const tableWrapper = mountedTable.find('div.tablewrap');
    expect(tableWrapper).toHaveLength(1);
  });

  it('expect label have children component with a span tag', () => {
    expect(table.find('thead')).toHaveLength(1);
  });

  it('expect basic definition for styling', () => {
    expect(table.props().className).toEqual('table table-striped table-hover');
  });
});

describe('Table custom props', () => {
  let mountedTable;
  let table;

  const props = {
    children: <tbody />,
    className: 'customClassName',
  };

  beforeEach(() => {
    mountedTable = mount(<Table {...props} />);
    table = mountedTable.find('table');
  });

  it('expect table have custom children', () => {
    expect(mountedTable.props().children).toEqual(props.children);
  });

  it('expect basic definition for styling', () => {
    expect(table.props().className).toEqual('table table-striped table-hover customClassName');
  });
});
