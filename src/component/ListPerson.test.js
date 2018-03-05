import React from 'react';
import {shallow} from 'enzyme';
import ListPerson from "./ListPerson";

const app = shallow(<ListPerson/>);

it('exists list person', () => {
    expect(app.find('.list-person').exists()).toEqual(true);
});
