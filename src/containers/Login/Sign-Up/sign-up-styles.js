import styled from 'styled-components';
import { Button } from 'antd';
import BGImage from '../../../assets/svg/Login/Sign-In/Background.png';

export const Container = styled.div`
	position: relative;
	width: 1000px;
	margin: 7.5vh auto 2vh auto;
	background-color: white;
	box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.25);
	border-radius: 8px;

	@media (max-width: 1200px) {
		margin: 3.5vh auto 2vh;
		width: 85vw;
	}
`;

export const RowStyle = styled.div`
	margin-left: 5%;
	width: 75%;
`;

export const Title = styled.p`
	display: block;
	margin-top: 5%;
	margin-left: 1.5%;
	font-size: 35px;
	color: rgba(0, 0, 0, 0.85);
	font-family: 'Inter', sans-serif;
	font-style: normal;
	font-weight: normal;
	@media (max-width: 500px) {
		margin-left: 0.5%;
	}
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

	@media (max-width: 500px) {
		margin-left: -40%;
	}
`;

export const SignIn = styled.a`
	font-family: 'Inter', sans-serif;
	font-size: 12px;
	@media (max-width: 500px) {
		margin-left: -40%;
	}
`;

export const RadioStyle = styled.div`
	font-family: 'Inter', sans-serif;
	font-size: 14px;
	margin-left: 35%;

	@media (max-width: 767px) {
		margin-top: -60%;
		margin-bottom: 10%;
		margin-left: 1%;
	}
	@media (max-width: 655px) {
		margin-left: 2%;
	}

	@media (max-width: 650px) {
		margin-bottom: 20%;
		margin-left: -2%;
	}
`;

export const CheckboxStyle = styled.div`
	font-family: 'Inter', sans-serif;
	width: 120%;
	margin-top: 5%;
	line-height: 30px;
	margin-left: 35%;

	@media (max-width: 767px) {
		margin-bottom: 10%;
	}

	@media (max-width: 700px) {
		margin-left: 1%;
	}

	@media (max-width: 650px) {
		margin-bottom: 20%;
	}

	@media (max-width: 500px) {
		margin-left: -1%;
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
	width: 51.5vh;
	left: 57%;
	top: 79%;

	@media (max-width: 2500px) {
		width: 53vh;
	}

	@media (max-width: 2300px) {
		width: 53vh;
	}

	@media (max-width: 2200px) {
		width: 53vh;
	}

	@media (max-width: 2000px) {
		width: 53vh;
	}

	@media (max-width: 1700px) {
		width: 53vh;
	}

	@media (max-width: 1200px) {
		width: 53vh;
	}

	@media (max-width: 500px) {
		left: 40%;
		top: 87.66%;
		width: 430px;
	}
`;

export const RadioTitle = styled.p`
	margin-bottom: -1%;
	font-size: 12px;
`;

export const PolicyStyle = styled.p`
	@media (max-width: 767px) {
		margin-bottom: 10%;
		margin-left: -10%;
	}

	@media (max-width: 700px) {
		margin-bottom: 10%;
		margin-left: -11%;
	}

	@media (max-width: 500px) {
		margin-left: -15%;
	}
`;
export const StyledButton = styled(Button)`
	min-width: 110px;
	border-radius: 5px;
	@media (max-width: 767px) {
		margin-left: -30%;
	}

	@media (max-width: 500px) {
		margin-left: -5%;
	}
`;
