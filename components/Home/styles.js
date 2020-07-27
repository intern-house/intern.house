import styled from 'styled-components';


export const Background = styled.div`
	background-color: #F6FBFF;
	height: 100vh;
`;

// To show a white box behind container
// 	background-color: white;
//	box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.25); 
export const Container = styled.div`
	position: relative;
	width: 1200px;
	margin: 7.5vh auto 2vh;
	

	@media (max-width: 1200px) {
		margin: 3.5vh auto 2vh;
		width: 85vw;
	}
`;

export const HeroImg = styled.img`
	display: block;
	margin: auto;
	padding-left: 25%;
	
	@media (max-width: 1000px) {
		width: 100%;
	}
`;