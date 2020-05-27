import React from 'react';
import Link from 'next/link';
import { Row, Col, Menu } from 'antd';

import {
	StyledRow,
	StyledMenu,
	Logo,
	StyledAvatar,
	StyledMenuItem,
	VerticalAlign,
} from './styles';

const Navigation = () => {
	return (
		<StyledRow justify={'center'}>
			<Col span={'18'}>
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
							<Link href="/networking" as="/networking">
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
			</Col>
		</StyledRow>
	);
};

export default Navigation;
