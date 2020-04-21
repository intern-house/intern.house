import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { NavNotAuthed } from '../Navigation';
import Footer from '../Footer';
import {
	LandingContainer,
	AccountContainer,
	ListingsContainer,
	NetworkContainer,
	MessagesContainer,
	SignInContainer,
	SignUpContainer,
	ForgetPasswordContainer,
} from '../../containers';

const Routes = () => {
	return (
		<>
			<Router>
				<div className={'body-content'}>
					<NavNotAuthed />
					<Switch>
						<Route exact path={ROUTES.LANDING} component={LandingContainer} />
						<Route exact path={ROUTES.LISTINGS} component={ListingsContainer} />
						<Route exact path={ROUTES.NETWORK} component={NetworkContainer} />
						<Route exact path={ROUTES.MESSAGES} component={MessagesContainer} />
						<Route exact path={ROUTES.ACCOUNT} component={AccountContainer} />
						<Route exact path={ROUTES.SIGN_IN} component={SignInContainer} />
						<Route exact path={ROUTES.SIGN_UP} component={SignUpContainer} />
						<Route
							exact
							path={ROUTES.FORGET}
							component={ForgetPasswordContainer}
						/>
					</Switch>

					<div className={'footer-content'}>
						<Footer />
					</div>
				</div>
			</Router>
		</>
	);
};

export default Routes;
