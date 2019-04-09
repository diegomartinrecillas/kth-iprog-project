import React from 'react';
import styles from './Price.module.scss';

interface Props {
	price: number;
}

const Price = (props: Props) => {
	const { price } = props;

	return (
		<div className={styles.price}>
			<div className={styles.now}>{price} SEK</div>
		</div>
	);
};

export default Price;
