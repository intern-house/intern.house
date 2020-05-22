import React from 'react';
import Link from 'next/link';
import { Menu } from 'antd';

import {
	StyledMenu,
	Logo,
	StyledAvatar,
	StyledMenuItem,
	VerticalAlign,
} from './styles';

const Navigation = () => {
	return (
		<StyledMenu>
			<VerticalAlign style={{ marginRight: 'auto' }}>
				<Link href="/index" as="/">
					<Logo />
				</Link>
			</VerticalAlign>

			<Menu mode="horizontal">
				<StyledMenuItem key="2">
					<Link href="/properties" as="/properties">
						<a>Properties</a>
					</Link>
				</StyledMenuItem>
				<StyledMenuItem key="3">
					<Link href="/jobs" as="/jobs">
						<a>Jobs</a>
					</Link>
				</StyledMenuItem>
				<StyledMenuItem key="4">
					<Link href="/messages" as="/">
						<a>Networking</a>
					</Link>
				</StyledMenuItem>
				<StyledMenuItem key="5">
					<Link href="/login/signin" as="/signin">
						<a>Sign In</a>
					</Link>
				</StyledMenuItem>
			</Menu>
			<VerticalAlign>
				<Link href="/account" as="/account">
					<StyledAvatar>DN</StyledAvatar>
				</Link>
			</VerticalAlign>
		</StyledMenu>
	);
};

export default Navigation;
