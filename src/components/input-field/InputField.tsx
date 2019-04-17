import React, { DetailedHTMLProps } from 'react';
import styles from './InputField.module.scss';

interface Props
	extends DetailedHTMLProps<
		React.InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	label: string;
	name: string;
	type: string;
	text?: string;
}

const InputField = (props: Props) => {
	const { label, name, type, text, ...rest } = props;
	return (
		<div className={'d-flex flex-column ' + styles['input-field']}>
			<label htmlFor={name} className="input-label">
				{label}
			</label>
			{type === 'textarea' && (
				<textarea
					{...rest as DetailedHTMLProps<
						React.TextareaHTMLAttributes<HTMLTextAreaElement>,
						HTMLTextAreaElement
					>}
					className="input"
					name={name}
					placeholder={label}
					required
				/>
			)}
			{(type === 'number' || type === 'text') && (
				<input
					{...rest}
					className="input"
					type={type}
					name={name}
					placeholder={label}
					min={type === 'number' ? 0 : null}
					required
				/>
			)}
			{type === 'file' && (
				<div className="custom-file">
					<input
						{...rest}
						type="file"
						className="custom-file-input"
						id="customFile"
					/>
					<label className="custom-file-label" htmlFor="customFile">
						{text || 'Choose file'}
					</label>
				</div>
			)}
		</div>
	);
};

export default InputField;
