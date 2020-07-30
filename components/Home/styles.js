import styled from 'styled-components';
import { Typography } from 'antd';

const { Title } = Typography;

export const Background = styled.div`
	background-color: #f6fbff;
	min-height: 100%;
	width: 100%;
	overflow: auto;
`;

// To show a white box behind container
// 	background-color: white;
//	box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.25);
export const Container = styled.div`
	position: relative;
	width: 1300px;
	margin: 10vh auto 2vh;

	@media (max-width: 1200px) {
		margin: 3.5vh auto 2vh;
		width: 85vw;
	}
`;

export const HeroImg = styled.img`
	display: block;
	margin: auto;
	margin-left: 25%;
	@media (max-width: 1000px) {
		width: 100%;
	}
`;

// https://travishorn.com/responsive-grid-in-2-minutes-with-css-grid-layout-4842a41420fe
export const Card = styled.div`
	display: flex;
	width: 350px;
	height: 575px;
	margin: 2vh auto;
	background-color: white;
	box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.25);
	border-radius: 10px;

	@media (max-width: 1300px) {
		margin: 3.5vh auto 2vh;
		width: 300px;
		height: 500px;
	}

	@media (max-width: 1150px) {
		width: 85vw;
		height: 200px;
	}
`;

export const IconContainer = styled.div`
	poistion: relative;
	column-gap: 50px;
	width: 400px;
`;

export const StateText = styled.h1`
	word-spacing: unset;
	display: table-caption;
	font-weight: normal;
	font-size: 110px;
	line-height: 130px;
	color: #355c7d;
`;

//	@media (max-width: 1150px) {
//	width: 85vw;
//	height: 200px;
//}

// background-color: white;
// box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.25);
export const StatesContainerSmall = styled.div`
	position: relative;
	z-index: 0;
	width: 500px;
	margin: 2vw;
	background-image: / svg/Landing/Hero-Images/City_SVG.svg;
`;

export const CityContainer = styled.img`
	display: block;
	z-index: -3;
	width: 85%;
	opacity: 70%;
`;
