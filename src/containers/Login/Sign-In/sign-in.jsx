import React from 'react';
import { Row, Col, Space, Typography, Form, Input, Checkbox } from 'antd';
import {
	Container,
	StyledButton,
	LogoImg,
	HeroImg,
	SocialImg,
	Background,
} from './styles';
import { Link } from 'react-router-dom';

import Logo from '../../../assets/img/Logo.png';
import HeroImage from '../../../assets/svg/Login/Sign-In/Hero-Image.svg';
import Facebook from '../../../assets/svg/Login/Sign-In/Facebook.svg';
import Google from '../../../assets/svg/Login/Sign-In/Google.svg';
import Twitter from '../../../assets/svg/Login/Sign-In/Twitter.svg';

const { Title } = Typography;

const SignInContainer = () => {
	const [form] = Form.useForm();

	const onFinish = values => {
		console.log('Success:', values);
		alert('Logged in.');
		// TODO: Add API endpoint.
	};

	return (
		<>
			<Background></Background>
			<Container className={'p-5'}>
				<Row>
					<Col xs={0} md={12}>
						<HeroImg src={HeroImage} />
					</Col>

					<Col xs={24} md={12} className={'p-xs-1 p-md-3'}>
						<Title className={'mb-5'}>Sign in</Title>
						<LogoImg src={Logo} />

						<Form layout={'vertical'} form={form} onFinish={onFinish}>
							<Form.Item
								name="Username"
								label="Username"
								rules={[
									{
										required: true,
										message: 'Please input your username',
									},
								]}>
								<Input placeholder="Enter your username" />
							</Form.Item>
							<Form.Item
								name="Password"
								label="Password"
								rules={[
									{
										required: true,
										message: 'Please input your password',
									},
								]}>
								<Input.Password />
							</Form.Item>
							<Row justify={'space-between'}>
								<Col>
									<Form.Item name="remember" valuePropName="checked">
										<Checkbox>Remember me</Checkbox>
									</Form.Item>
								</Col>
								<Col>
									<Form.Item>
										<Link to="/forget-password">Forgot Password?</Link>
									</Form.Item>
								</Col>
							</Row>

							<Space size={24}>
								<Form.Item>
									<StyledButton type="primary" htmlType="submit">
										Login
									</StyledButton>
								</Form.Item>

								<Form.Item>
									<Link to="/forget-password">
										<StyledButton type="secondary" htmlType="button">
											Sign Up
										</StyledButton>
									</Link>
								</Form.Item>
							</Space>
						</Form>

						<div>
							<p>Or you can join with</p>
							<Space size={10}>
								<SocialImg src={Facebook} />
								<SocialImg src={Google} />
								<SocialImg src={Twitter} />
							</Space>
						</div>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default SignInContainer;
