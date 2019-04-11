import React from 'react';
import styles from './InputSelect.module.scss';

interface Props {
	name: string;
	children: any;
}

const InputSelect = (props: Props) => {
	const { name, children } = props;

	return (
		<div className={'d-flex flex-column ' + styles['selects']}>
			<label htmlFor={name} className="input-label">
				{name}
			</label>
			<select className={`${styles.select} custom-select`} name={name}>
				{children}
			</select>
		</div>
	);
};

export default InputSelect;
