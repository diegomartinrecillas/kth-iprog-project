import React from 'react';
import Price from '../price/Price';
import NewPrice from '../new-price/NewPrice';

import styles from './BookInfo.module.scss';

const BookInfo = () => {
	return (
		<div className="row">
			<div className="col-auto">
				<img
					className={`${styles.cover}`}
					src="https://karlavagen31.se/content/images/thumbs/0001932_vi-ger-bort-nasta-lasupplevelse-till-bokcirkeln.jpeg"
				/>
			</div>
			<div className="col">
				<div className={styles.edition}>Swedish, 2018</div>
				<div className={styles.title}>Allt jag fått lära mig</div>
				<div className={styles.author}>By Tara Westover</div>
				<div className="mt-3">
					<Price price={80} />
					<NewPrice newPrice={450} />
				</div>
				<div className={styles.description}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis dolorem
					rem amet quasi perspiciatis obcaecati reiciendis cupiditate beatae
					eligendi a? Dolorum facilis id aspernatur? Sit repellat vero ea soluta
					quasi.
				</div>
			</div>
		</div>
	);
};

export default BookInfo;
