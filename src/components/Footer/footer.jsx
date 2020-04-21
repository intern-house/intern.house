import React from 'react';
import { Row, Col } from 'antd';
import { StyledFooter, Divider } from './styles';

const Footer = () => {
	return (
		<>
			<StyledFooter>
				<Divider />

				<Row justify={'space-between'}>
					<Col>Developed by Intern.House © 2020. All rights reserved.</Col>
					<Col>
						Contact us at
						<a href="mailto:support@intern.house"> support@intern.house</a>.
					</Col>
				</Row>
			</StyledFooter>
		</>
	);
};

export default Footer;
