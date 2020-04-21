import styled from 'styled-components';
import { Button } from 'antd';

export const Container = styled.div`
	position: relative;
	width: 1000px;
	margin: auto;
	margin-top: 5vh;
	box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.25);
	border-radius: 8px;

	@media (max-width: 1200px) {
		width: 85vw;
	}
`;

export const StyledButton = styled(Button)`
	min-width: 110px;
	border-radius: 5px;
`;

export const LogoImg = styled.img`
	position: absolute;
	top: 0;
	right: 15px;
	width: 35px;
	height: 35px;
`;

export const HeroImg = styled.img`
	display: block;
	margin: auto;
	padding: 5%;

	@media (max-width: 1000px) {
		width: 100%;
	}
`;

export const SocialImg = styled.img`
	display: block;
	cursor: pointer;

	-webkit-filter: grayscale(100%);
	-moz-filter: grayscale(100%);
	-o-filter: grayscale(100%);
	-ms-filter: grayscale(100%);
	filter: grayscale(100%);
`;
