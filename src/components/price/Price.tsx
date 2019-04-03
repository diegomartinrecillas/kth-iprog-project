import React from 'react';
import styles from './Price.module.scss';

interface Props {
	price: number;
	newPrice: number;
}

const Price = (props: Props) => {
	const { price, newPrice } = props;

	return (
		<div className={styles.price}>
			<div className={styles.now}>{price} SEK</div>
			<div className={styles.new}>
				<b>NEW</b>
				{newPrice} SEK
			</div>
		</div>
	);
};

export default Price;
