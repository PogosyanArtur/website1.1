import React from 'react';
import * as Icons from './icons';

const Icon = props => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className={props.className}
			width={props.size || 24}
			height={props.size || 24}
			fill={props.color || 'currentColor'}
			viewBox={props.viewBox || '0 0 24 24'}
			style={{ transform: `rotate(${props.rotate}deg)`, ...props.style } || null}
			aria-hidden="true"
		>
			{Icons[props.name](props)}
		</svg>
	);
};

export default Icon;
