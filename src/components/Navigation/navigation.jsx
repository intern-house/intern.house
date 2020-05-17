import React from 'react';
import { Link } from 'react-router-dom';
import LogoImg from '../../assets/img/logo.png';
import { Menu } from 'antd';

import {
	StyledMenu,
	Logo,
	StyledAvatar,
	StyledMenuItem,
	VerticalAlign,
} from './styles';

export const NavAuthed = () => {
	return (
		<StyledMenu>
			<VerticalAlign style={{ marginRight: 'auto' }}>
				<Link to="/"></Link>
			</VerticalAlign>

			<Menu mode="horizontal">
				<StyledMenuItem key="2">
					<Link to="/network">Network</Link>
				</StyledMenuItem>
				<StyledMenuItem key="3">
					<Link to="/listings">Listings</Link>
				</StyledMenuItem>
				<StyledMenuItem key="4">
					<Link to="/messages">Messages</Link>
				</StyledMenuItem>
			</Menu>
			<VerticalAlign>
				<Link to="/account">
					<StyledAvatar>DN</StyledAvatar>
				</Link>
			</VerticalAlign>
		</StyledMenu>
	);
};

export const NavNotAuthed = () => {
	return (
		<StyledMenu>
			<VerticalAlign style={{ marginRight: 'auto' }}>
				<Link to="/">{/* <Logo src={LogoImg} /> */}</Link>
			</VerticalAlign>

			<Menu mode="horizontal">
				<StyledMenuItem key="listings">
					<Link to="/listings">Listings</Link>
				</StyledMenuItem>
				<StyledMenuItem key="signin">
					<Link to="/signin">Sign In</Link>
				</StyledMenuItem>
				<StyledMenuItem key="signup">
					<Link to="/signup">Sign Up</Link>
				</StyledMenuItem>
			</Menu>
		</StyledMenu>
	);
};
