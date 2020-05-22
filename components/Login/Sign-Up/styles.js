import styled from 'styled-components';
import { Button } from 'antd';
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
	height: 100%;
	width: 100%;
	background: url(/svg/Login/Shared/Background.png);
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
	left: 55%;
	top: 80%;

	@media (max-width: 1000px) {
		left: 50%;
	}

	@media (max-width: 830px) {
		left: 55%;
		width: 40vh;
	}

	@media (max-width: 768px) {
		display: none;
	}
`;

export const StyledButton = styled(Button)`
	min-width: 110px;
	border-radius: 5px;
`;
