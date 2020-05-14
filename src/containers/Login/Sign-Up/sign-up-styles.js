import styled from 'styled-components';
import BGImage from '../../../assets/svg/Login/Sign-In/Background.png';

export const Container = styled.div`
	position: relative;
	width: 1000px;
	margin: 7.5vh auto 2vh auto;
	background-color: white;
	box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.25);
	border-radius: 8px;
	box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.25);
	width: 50%;
	display: block;
	margin-left: auto;
	margin-right: auto;
	margin-top: 5%;
	align-items: center;

	@media (max-width: 1200px) {
		margin: 3.5vh auto 2vh;
		width: 85vw;
	}
`;

export const Title = styled.p`
	display: block;
	margin-top: 5%;
	font-size: 35px;
	margin-bottom: 7%;
	color: rgba(0, 0, 0, 0.85);
	font-family: 'Inter', sans-serif;
	font-style: normal;
	font-weight: normal;
`;

export const Subtitle = styled.p`
	font-family: 'Inter', sans-serif;
	font-size: 12px;
	margin-left: 20.2%;
	margin-bottom: 1%;
`;

export const Check = styled.div`
	margin-left: 100px;
	position: relative;
	@media (max-width: 570px) {
		margin-left: 20%;
	}
	@media (max-width: 575px) {
		margin-left: 20%;
	}
`;

export const Policy = styled.p`
	display: inline;
	font-family: 'Roboto', sans-serif;
	font-size: 14px;
`;

export const SignUp = styled.div`
	font-family: 'Inter', sans-serif;

	@media (max-width: 570px) {
		margin-right: -100%;
	}
	@media (max-width: 500px) {
		margin-right: -120%;
	}
`;

export const SignIn = styled.a`
	font-family: 'Inter', sans-serif;
	font-size: 12px;
`;

export const RadioStyle = styled.div`
	font-family: 'Inter', sans-serif;
	font-size: 14px;
`;

export const CheckboxStyle = styled.div`
	font-family: 'Inter', sans-serif;
	font-size: 14px;
	@media (max-width: 500px) {
		margin-bottom: 10%;
	}
`;

export const Logo = styled.img`
	width: 7%;
	float: right;
`;

export const Background = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	z-index: -1;
	height: 100vh;
	width: 100vw;
	background-image: url(${BGImage});
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;

	@media (max-width: 768px) {
		background-color: #c0e6ff;
	}
`;
export const HeroImg = styled.img`
	position: absolute;
	margin: auto;
	width: 50vh;
	left: 63%;
	top: 79%;

	@media (max-width: 2500px) {
		width: 49.5vh;
	}

	@media (max-width: 2300px) {
		width: 49.5vh;
	}

	@media (max-width: 2200px) {
		width: 49.5vh;
	}

	@media (max-width: 2000px) {
		width: 49.5vh;
	}

	@media (max-width: 1700px) {
		width: 49.5vh;
	}

	@media (max-width: 500px) {
		left: 40%;
		top: 90%;
		width: 450px;
	}
`;
