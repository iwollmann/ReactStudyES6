import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import {TimeSheetPage} from './TimesheetPage';

describe('TimeSheet Manage Page', () => {
    it('Cannot add a negative hour', () => {
        const props = {
            hours: []
        };
        const wrapper = mount(<TimeSheetPage {...props} />);
        expect(wrapper.find('.button').length).toBe(1);
    });
});