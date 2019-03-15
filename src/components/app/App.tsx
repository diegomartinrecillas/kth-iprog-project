import React from 'react';

import { AppProvider } from '../../contexts/App.context';
import Title from '../title/Title';
import InputTitle from '../title/InputTitle';
import ResetTitle from '../title/ResetTitle';

import styles from './App.module.scss';

const App = () => {
	return (
		<AppProvider>
			<div className={styles.app}>
				<header className={styles.header}>
					<Title />
					<InputTitle />
					<ResetTitle />
				</header>
			</div>
		</AppProvider>
	);
};

export default App;
