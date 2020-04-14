import React from 'react';
import { StyledFooter, Divider, Div } from './styles';

const Footer = () => {
	return (
		<>
			<StyledFooter>
				<Divider />

				<Div>
					<p>Developed by Intern.House © 2020. All rights reserved.</p>
					<p>
						Contact us at
						<a href="mailto:support@intern.house"> support@intern.house</a>.
					</p>
				</Div>
			</StyledFooter>
		</>
	);
};

export default Footer;
