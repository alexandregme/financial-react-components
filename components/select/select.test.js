import React from 'react';
import { shallow } from 'enzyme';
import Select from 'components/select';

describe('Select', () => {
  let mountedSelect;
  let select;

  beforeEach(() => {
    mountedSelect = shallow(<Select />);
    select = mountedSelect.find('select');
  });

  it('renders without crashing', () => {
    shallow(<Select />);
    expect(mountedSelect).toMatchSnapshot();
  });

  it('expect to have select tag with type select', () => {
    expect(select).toHaveLength(1);
  });

  it('expect className equals to select', () => {
    expect(select.props().className).toEqual('select');
  });

  it('expect select id prop to be null', () => {
    expect(select.props().id).toBeNull();
  });

  it('expect select name prop to be empty', () => {
    expect(select.props().name).toEqual('');
  });

  it('expect select concatLabelValue prop to be empty', () => {
    expect(select.props().concatLabelValue).toBeFalsy();
  });

  it('expect select id prop to be null', () => {
    const option = select.find('option');
    expect(option).toHaveLength(1);
    expect(option.props().value).toEqual('0');
    expect(option.text()).toEqual('There Are No Options');
  });
});

describe('Select with custom props', () => {
  let mountedSelect;
  let select;
  const options = [{
    value: '1',
    label: 'option 1',
  }, {
    value: '2',
    label: 'option 2',
  }, {
    value: '3',
    label: 'option 3',
  }];

  const props = {
    id: 'customId',
    name: 'customName',
    concatLabelValue: true,
    options,
  };

  beforeEach(() => {
    mountedSelect = shallow(<Select {...props} />);
    select = mountedSelect.find('select');
  });

  it('expect to set the id as customid', () => {
    expect(select.props().id).toEqual(props.id);
  });

  it('expect to set the name as customName', () => {
    expect(select.props().name).toEqual('customName');
  });

  it('expect select id prop to be null', () => {
    const selectOptions = select.find('option');
    expect(selectOptions).toHaveLength(3);
    expect(selectOptions.first().props().value).toEqual('1');
    expect(selectOptions.first().text()).toEqual('1 option 1');
  });
});
