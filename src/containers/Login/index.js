import React from 'react';
import { Container } from './styles';
import SignInContainer from './Sign-In';
import SignUpContainer from './Sign-Up';

const SignUpContainer = () => {
	return <Container>Sign Up</Container>;
};

const SignInContainer = () => {
	return <Container>Sign In</Container>;
};

const ForgetPasswordContainer = () => {
	return <Container>Forget Password</Container>;
};

export { SignUpContainer, SignInContainer, ForgetPasswordContainer };
