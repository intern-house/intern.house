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

export const Title = styled.p`
	display: block;
	font-size: 35px;

	@media (max-width: 500px) {
		margin-left: 0.5%;
	}
`;

export const SignUp = styled.div`
	@media (max-width: 500px) {
		margin-left: -40%;
	}
`;

export const Background = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	z-index: -1;
	height: 100vh;
	width: 100vw;
	background: url(${BGImage});
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

	@media (max-width: 1200px) {
		width: 53vh;
	}

	@media (max-width: 500px) {
		left: 40%;
		top: 87.66%;
		width: 430px;
	}
`;

export const StyledButton = styled(Button)`
	min-width: 110px;
	border-radius: 5px;
`;
