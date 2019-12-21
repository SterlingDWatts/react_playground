import React from 'react';
import GreatGrandChild from './GreatGrandChild';
import './GrandChild.css';

export default function GrandChild() {
    return (
        <div className='GrandChild'>
            <GreatGrandChild />
        </div>
    );
}
