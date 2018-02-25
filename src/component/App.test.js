import React from 'react';
import {shallow} from 'enzyme';
import App from './App';

const app = shallow(<App/>);

it('renders correctly', () =>{
    expect(app).toMatchSnapshot()
});

it('empty state with not notes', () =>{
    expect(app.state().notes).toEqual([]);
});
