import React from 'react';
import './demonym.css';

function anOrA(string) {
	const firstLetter = string.split('')[0].toLowerCase();
	if (firstLetter.match(/[aeiou]/g)) {
		return 'An';
	} else {
		return 'A';
	}
}

export default function Demonym(props) {
	
	return (
		<div className='demonym'>
			{ anOrA(props.name) } { props.name } comes from { props.country }
		</div>
	);

}
