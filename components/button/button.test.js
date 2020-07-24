import React from 'react';
import { shallow } from 'enzyme';
import Button from 'components/button';

describe('Button', () => {
    let mountedButton;
    let button;

    beforeEach(() => {
        mountedButton = shallow(<Button />);
        button = mountedButton.find('button');
    });

    it('renders without crashing', () => {
        shallow(<Button />);
        expect(mountedButton).toMatchSnapshot();
    });

    it('expect to have button tag with default value', () => {
        expect(button).toHaveLength(1);
        expect(button.text()).toEqual('button');
    });
});
