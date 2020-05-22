import React from 'react';
import Link from 'next/link';

import { Row, Col, Space, Typography, Form, Input, Checkbox } from 'antd';
import {
	Container,
	StyledButton,
	HeroImg,
	SocialImg,
	Background,
} from './styles';

const { Title } = Typography;

function SignInContainer() {
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
						<HeroImg src={'/svg/Login/Sign-In/Hero.svg'} />
					</Col>

					<Col xs={24} md={12} className={'p-xs-1 p-md-3'}>
						<Title className={'mb-5'}>Sign in</Title>

						<Form layout={'vertical'} form={form} onFinish={onFinish}>
							<Form.Item
								name="Username"
								label="Username"
								rules={[
									{
										required: true,
										message: 'Please enter your username',
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
										message: 'Please enter your password',
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
										<Link href="/login/forgetpassword" as="forgetpassword">
											<a>Forget Password?</a>
										</Link>
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
									<Link href="/login/signup" as="signup">
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
								<SocialImg src={'/svg/Login/Sign-in/Facebook.svg'} />
								<SocialImg src={'/svg/Login/Sign-in/Google.svg'} />
								<SocialImg src={'/svg/Login/Sign-in/Twitter.svg'} />
							</Space>
						</div>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default SignInContainer;
