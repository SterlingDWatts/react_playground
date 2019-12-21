import React from 'react';
import ReactDOM from 'react-dom';
import GrandChild from './GrandChild';

describe(`GrandChild Component`, () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<GrandChild />, div);
        ReactDOM.unmountComponentAtNode(div);
    })

})
