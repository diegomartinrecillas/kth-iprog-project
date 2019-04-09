import React from 'react';
import styles from './InputField.module.scss';

interface Props {
	name: string;
	type: string;
}

const InputField = (props: Props) => {
	const { name, type } = props;
	return (
		<div className={'d-flex flex-column ' + styles['input-field']}>
			<label htmlFor={name} className="input-label">
				{name}
			</label>
			{type === 'dropdown' ? '' : null}
			{type === 'text' ? (
				<input className="input" type="text" name={name} placeholder={name} />
			) : null}
			{type === 'textarea' ? (
				<textarea className="input" name={name} placeholder={name} />
			) : null}
			{type === 'number' ? (
				<input className="input" type="number" name={name} placeholder={name} />
			) : null}
		</div>
	);
};

export default InputField;
