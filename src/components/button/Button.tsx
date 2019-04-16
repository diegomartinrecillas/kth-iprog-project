import React, { DetailedHTMLProps } from 'react';

import styles from './Button.module.scss';

interface Props
	extends DetailedHTMLProps<
		React.ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	text: string;
	icon: string;
}

const Button = (props: Props) => {
	const { icon, text, ...rest } = props;
	return (
		<button className={styles.button} {...rest}>
			<i className={'fas fa-' + icon} />
			{text}
		</button>
	);
};

export default Button;
