import styled from 'styled-components';
import { Menu, Avatar } from 'antd';

export const Logo = styled.img`
	width: 40px;
	height: 40px;
`;

export const StyledMenu = styled.nav`
	display: flex;
	justify-content: flex-end;
	padding: 0 50px;
	box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.25);

	background-color: ${props => (props.darkmode ? '#001529' : 'white')};
`;

export const StyledMenuItem = styled(Menu.Item)`
	width: 100px;
	text-align: center;
`;

export const StyledAvatar = styled(Avatar)`
	margin: auto 0 auto 20px;
	background-color: #87d068;
	cursor: pointer;
`;

export const VerticalAlign = styled.div`
	margin: auto 0;
`;
