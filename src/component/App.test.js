import React from 'react';
import {shallow} from 'enzyme';
import App from './App';

const app = shallow(<App/>);

it('renders correctly', () =>{
    expect(app).toMatchSnapshot()
});

it('empty state with not person', () =>{
    expect(app.state().notes).toEqual([]);
});

it('click button add new person', () =>{
    app.find(".add-person-btn").simulate("click");

    expect(app.find(".person-list").children().length).toEqual(1);
});
