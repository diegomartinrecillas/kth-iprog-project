import React, { useContext } from 'react';
import FacebookLogin, { ReactFacebookLoginInfo } from 'react-facebook-login';

import { UserContext } from '../../contexts/User.context';
import styles from './Login.module.scss';

const Login = () => {
	const facebookAppId = '397496977695939';
	const { signIn } = useContext(UserContext);

	const responseFacebook = (response: ReactFacebookLoginInfo) =>
		signIn(response.accessToken);

	return (
		<FacebookLogin
			appId={facebookAppId}
			autoLoad={true}
			callback={responseFacebook}
			cssClass={styles.login}
			textButton="Continue with Facebook"
			icon="fab fa-facebook-square"
		/>
	);
};

export default Login;
