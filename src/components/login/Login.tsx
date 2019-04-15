import React from 'react';
import FacebookLogin from 'react-facebook-login';
import styles from './Login.module.scss';

const Login = () => {
	const facebookAppId = '397496977695939';

	const responseFacebook = (response: any) => {
		// console.log(response);
		// console.log('login');
	};

	return (
		<FacebookLogin
			appId={facebookAppId}
			autoLoad={true}
			callback={responseFacebook}
			cssClass={styles.login}
			icon="fab fa-facebook-square"
		/>
	);
};

export default Login;
