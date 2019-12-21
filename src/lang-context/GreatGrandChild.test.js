import React from 'react';
import ReactDOM from 'react-dom';
import GreatGrandChild from './GreatGrandChild';

describe(`GreatGrandChild Component`, () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<GreatGrandChild />, div);
        ReactDOM.unmountComponentAtNode(div);
    })

})
