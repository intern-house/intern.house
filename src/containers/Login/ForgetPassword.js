import React from 'react';
import {Typography, Form, Input, Button} from 'antd';
import { Container, Image, Logo, VerticalAlign, Card, CardContainer} from './forgot-styles';
import passwordGraphic from '../../assets/img/forgotPasswordGraphic.svg';
import logo from '../../assets/img/LogoStreet.svg';

import './forgot-password.css';

export const ForgetPasswordContainer = () => {
	const {Title, Text} = Typography;

	const layout = {
		labelCol: {
		  span: 0,
		},
		wrapperCol: {
		  span: 16,
		},
		position: 'absolute',
		width: '309px',
		height: '52px',
		left: '330px',
		top: '489px'
	  };

	  const tailLayout = {
		wrapperCol: {
		  span: 16,
		},
	  };

	return <Container>
	<Card>
		<VerticalAlign style={{ marginRight: 'auto' }}>
			<Logo src={logo} />
		</VerticalAlign>
	<CardContainer>
		<Form
		class='form'
		name="basic"
		initialValues={{
			remember: true,
		}}>
			<Title class='title' level={3}>Forgot Password</Title>
			<Text class='text'>
				Thats fine! We will send you an email to reset your password.
			</Text>
			<Text class='label'>Email</Text>
			<Form.Item
				{...layout}
				name="email"
				rules={[
					{
						required: true,
						message: 'Please enter email to reset password'
					},
				]}
			>
				<Input />
			</Form.Item>

			<Form.Item {...tailLayout}>
				<Button type="primary" htmlType="submit">
					Reset my password
				</Button>
			</Form.Item>

			<Text class='text'>
				Go back to sign-in page.
			</Text>

		</Form>
			<Image src={passwordGraphic} />
		</CardContainer>
	</Card>	
</Container>;
};

export default { ForgetPasswordContainer };