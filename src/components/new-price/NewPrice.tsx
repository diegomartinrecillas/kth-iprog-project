import React from 'react';
import styles from './NewPrice.module.scss';

interface Props {
	newPrice: number;
}

const NewPrice = (props: Props) => {
	const { newPrice } = props;

	return (
		<div className={styles.price}>
			<div className={styles.new}>
				<b>NEW</b>
				{newPrice}
			</div>
		</div>
	);
};

export default NewPrice;
