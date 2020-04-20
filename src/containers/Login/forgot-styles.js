import styled from 'styled-components';

export const Container = styled.div`
	margin: 50px;
	height: 550px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Image = styled.img`
	height: 75%;
	width: 55%;
	margin-left: 10%;
`;

export const Logo = styled.img`
	width: 45px;
    height: 45px;
    margin: auto, 0;
`;

export const VerticalAlign = styled.div`
	padding-left: 775px;
	padding-top: 8px;
	position: absolute;
`;

export const Card = styled.div`
	height: 85%;
	width: 65%;
	display: flex;
	align-items: center;
	flex-direction: column;
	left: 15.28%;
	right: 15.28%;
	top: 20.7%;,
	bottom: 20.7%
	background: #FFFFFF;
	box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.25);
`;

export const CardContainer = styled.div `
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: row;
	padding: 10%
`;
