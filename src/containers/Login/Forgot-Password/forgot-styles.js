import styled from 'styled-components';
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

export const Image = styled.img`
	display: block;
	margin: auto;
	padding: 5%;
	@media (max-width: 1000px) {
		width: 100%;
	}
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
