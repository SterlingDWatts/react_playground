import React from 'react';
import ReactDOM from 'react-dom';
import Messages from './Messages';
import renderer from 'react-test-renderer';
import { exportAllDeclaration } from '@babel/types';

it('renders without creaching', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Messages />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
const tree = renderer
    .create(<Messages name="Messages" unread={4}/>)
    .toJSON();
expect(tree).toMatchSnapshot();
});