import React from 'react';

import styles from './Price.module.scss';

interface Props {
	price: number;
	newPrice?: number;
}

const Price = (props: Props) => {
	const { newPrice, price } = props;
	return (
		<div className={styles.price}>
			<div className={styles.now}>{price} SEK</div>
			{newPrice != null && (
				<div className={styles.new}>
					<b>NEW</b>
					{newPrice}
				</div>
			)}
		</div>
	);
};

export default Price;
