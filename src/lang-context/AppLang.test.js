import React from 'react';
import ReactDOM from 'react-dom';
import AppLang from './AppLang';

describe(`AppLang Component`, () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<AppLang />, div);
        ReactDOM.unmountComponentAtNode(div);
    })

})
