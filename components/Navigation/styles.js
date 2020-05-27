import styled from 'styled-components';
import { Menu, Avatar, Row } from 'antd';

export const StyledRow = styled(Row)`
	box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.25);
	background-color: ${props => (props.darkmode ? '#001529' : 'white')};
`;

export const Logo = styled.div`
	display: block;
	margin: 5px 0;
	width: 35px;
	height: 35px;
	background: url('/svg/Logo-Wide-Rect.png');
	background-size: 178px 35px;
	background-repeat: no-repeat;
	border-radius: 50px 50px 50px 0px;
	cursor: pointer;
	transition: width 0.7s ease 0.4s;

	&:hover {
		width: 178px;
		height: 35px;
		background: url('/svg/Logo-Wide-Rect.png');
		background-size: 178px 35px;
		background-repeat: no-repeat;
		border-radius: 50px 50px 50px 0px;
		cursor: pointer;
		transition: width 0.3s ease;
		transition: border-radius 0s none;
	}
`;

export const StyledMenu = styled.nav`
	display: flex;
	justify-content: flex-end;
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
