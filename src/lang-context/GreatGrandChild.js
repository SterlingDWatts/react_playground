import React, { Component } from 'react';
import languageSpecificCopy from './languageSpecificCopy';
import LanguageContext from './LanguageContext';
import './GreatGrandChild.css';

export default class GreatGrandChild extends Component {

    static contextType = LanguageContext;

    render() {
        const copy = languageSpecificCopy[this.context.lang] || {}
        return (
            <section className='GreatGrandChild'>
                <h2>{ copy.title} </h2>
                <p>{ copy.body }</p>
            </section>
        );
    }

}
