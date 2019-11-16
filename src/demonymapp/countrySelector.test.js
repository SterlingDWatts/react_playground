import React from 'react';
import ReactDOM from 'react-dom';
import CountrySelector from './countrySelector';

describe(`CountrySelector Component`, () => {

    it('renders without errors', () => {
        const div = document.createElement('div');
        ReactDOM.render(<CountrySelector/>, div);
        ReactDOM.unmountComponentAtNode(div);
    })
})