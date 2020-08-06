import styled from 'styled-components';
import { Typography } from 'antd';

const Title = Typography;

export const Background = styled.div`
	background-color: #f6fbff;
	min-height: 100%;
	width: 100%;
	overflow: auto;
	z-index: 50;
`;


export const LandingText = styled(Title)`
	font-weight: bold;
	font-size: 50px;
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

// To show a white box behind container
// 	background-color: white;
//	box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.25);
export const Container = styled.div`
	position: relative;
	width: 85vw;
	margin: 10vh auto 2vh;
	z-index: 1;
	background-color: white;
	box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.25);

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

export const BigTextGridContainer = styled.div`
	display: grid;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-around;
	grid-template-columns: 1fr 2fr;

	background-color: white;
	box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.25);

`;


export const StateText = styled.div`

	position: absolute;
	height: 100%;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	font-size: 90px;
	
	
	color: #355c7d;

	@media (max-width: 1200px) {
		line-height: 100px;
	}
`;

export const SmallStateText = styled.div`
	
	width: 70%;
`;

export const StatesContainerSmall = styled.div`
	position: relative;
	z-index: -1;
	background-image: url("/svg/Landing/Hero-Images/City_SVG.svg");
	background-repeat: no-repeat;
	opacity: 0.5;
	width: 100%;
	height: 100%;
`;

export const HeroImg = styled.img`
	display: block;
	margin: auto;
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

export const IconContainer = styled.div`
	poistion: relative;
	column-gap: 50px;
	width: 400px;
`;

export const ButtonContainer = styled.div`

	display: grid;
	grid-template-columns: repeat(3, 1fr);
	justify-content: space-around;
	column-gap: 70px;
	row-gap: 30px;

	@media (max-width: 500px) {
		grid-template-columns: repeat(2, 1fr);
	}

`;

//	@media (max-width: 1150px) {
//	width: 85vw;
//	height: 200px;
//}

// background-color: white;
// box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.25);
