import React, { DetailedHTMLProps } from 'react';
import styles from './InputSelect.module.scss';

interface Props
	extends DetailedHTMLProps<
		React.SelectHTMLAttributes<HTMLSelectElement>,
		HTMLSelectElement
	> {
	label: string;
	name: string;
}

const InputSelect = (props: Props) => {
	const { label, name, children, ...rest } = props;

	return (
		<div className={'d-flex flex-column ' + styles['selects']}>
			<label htmlFor={name} className="input-label">
				{label}
			</label>
			<select
				className={`${styles.select} custom-select`}
				name={name}
				{...rest}
			>
				{children}
			</select>
		</div>
	);
};

export default InputSelect;
