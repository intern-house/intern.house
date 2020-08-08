import styled from 'styled-components';
import { Typography, Button } from 'antd';

const Title = Typography;

export const Background = styled.div`
	background-color: #f6fbff;
	min-height: 100%;
	width: 100%;
	overflow: auto;
	z-index: 50;
`;

// To show a white box behind container
// 	background-color: white;
//	box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.25);
export const Container = styled.div`
	position: relative;
	width: 85vw;
	margin: 10vh auto 2vh;
	z-index: 1;
`;

export const HeroImg = styled.img`
	display: block;
	margin-top: auto;
	margin-left: 25%;

	@media (max-width: 1000px) {
		width: 100%;
	}
`;

export const HeroImgLeft = styled.img`
	display: block;
	margin: auto;
	align-items: center;
	@media (max-width: 1000px) {
		width: 100%;
	}
`;

export const LandingText = styled(Title)`
	font-weight: bold;
	font-size: 55px;
	color: black;

	@media (max-width: 500px) {
		font-size: 35px;
	}

	@media (max-width: 350px) {
		font-size: 30px;
	}
`;

export const CardSectionText = styled(Title)`
	font-weight: bold;
	font-size: 45px;
	text-align: center;
	color: black;

	@media (max-width: 455px) {
		font-size: 30px;
	}

	@media (max-width: 350px) {
		font-size: 30px;
	}
`;

export const CardContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-around;
`;

// https://travishorn.com/responsive-grid-in-2-minutes-with-css-grid-layout-4842a41420fe
export const Card = styled.div`
	display: grid;
	flex-basis: 350px;
	height: 575px;
	margin: 3.5vh auto 2vh;
	background-color: white;
	box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.25);
	border-radius: 10px;

	@media (max-width: 1300px) {
		flex-basis: 300px;
	}

	@media (max-width: 1150px) {
		flex-basis: 85vw;
		height: 300px;
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 600px) {
		flex-basis: 95vw;
		height: 475px;
		grid-template-columns: repeat(1, 1fr);
		padding: 20px;
	}
`;

export const CardImgContainer = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	justify-content: center;
`;

export const CardTxtContainer = styled.div`
	width: 100%;
	height: 100%;
`;

export const IconContainer = styled.div`
	poistion: relative;
	column-gap: 50px;
	width: 400px;
`;

export const CityButtonContainer = styled.div`
	display: grid;
	justify-content: space-around;
	grid-template-columns: repeat(3, 1fr);
	column-gap: 70px;
	row-gap: 30px;

	@media (max-width: 500px) {
		grid-template-columns: repeat(2, 1fr);
	}
`;

export const CityButton = styled(Button)`
	border-radius: 10px;
	box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.25);
`;
