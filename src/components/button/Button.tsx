import React from 'react';

import styles from './Button.module.scss';

interface Button {
	text: string;
	icon: string;
}

const Button = (button: Button) => {
	return (
		<button className={styles.button} type="submit">
			<i className={'fas fa-' + button.icon} />
			{button.text}
		</button>
	);
};

export default Button;
