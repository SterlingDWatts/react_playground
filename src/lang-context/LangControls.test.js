import React from 'react';
import ReactDOM from 'react-dom';
import LangControls from './LangControls';

describe(`LangControls Component`, () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<LangControls />, div);
        ReactDOM.unmountComponentAtNode(div);
    })

})
