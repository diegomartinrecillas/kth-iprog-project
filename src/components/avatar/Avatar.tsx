import React, { SyntheticEvent } from 'react';

import styles from './Avatar.module.scss';

interface Props {
	src: string;
}

const Avatar = (props: Props) => {
	const { src } = props;

	return <img className={styles.pic} src={src} />;
};

export default Avatar;
