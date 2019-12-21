import React from 'react';
import GrandChild from './GrandChild';
import './Child.css';

export default function Child() {
    return (
        <main role='main' className='Child'>
            <GrandChild />
        </main>
    );
}
