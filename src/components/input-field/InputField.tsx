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
			{type === 'textarea' && (
				<textarea className="input" name={name} placeholder={name} required />
			)}
			{(type === 'number' || type === 'text') && (
				<input
					className="input"
					type={type}
					name={name}
					placeholder={name}
					min={type === 'number' ? 0 : null}
					required
				/>
			)}
			{type === 'file' && (
				<div className="custom-file">
					<input type="file" className="custom-file-input" id="customFile" />
					<label className="custom-file-label" htmlFor="customFile">
						Choose file
					</label>
				</div>
			)}
		</div>
	);
};

export default InputField;
