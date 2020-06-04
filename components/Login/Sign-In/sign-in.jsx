import React, { useState } from 'react';
import Router from 'next/router';
import Link from 'next/link';

import {
	Row,
	Col,
	Space,
	Typography,
	Form,
	Input,
	Checkbox,
	Alert,
} from 'antd';

import {
	Container,
	StyledButton,
	HeroImg,
	SocialImg,
	Background,
} from './styles';

const axios = require('axios');

const { Title } = Typography;

function SignInContainer() {
	const [form] = Form.useForm();
	const [message, setMessage] = useState();

	const onFinish = values => {
		axios
			.post('http://localhost:5000/auth/signin', {
				email: values.email,
				password: values.password,
			})
			.then(res => {
				if (res.data.code != 200) {
					setMessage('Sorry! The user does not exists.');
				} else {
					localStorage.setItem('rememberMe', values.remember);
					Router.push('/');
				}
			});
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
						<Title>Sign in</Title>

						{message && (
							<Alert
								type={'error'}
								message={message}
								className={'mb-3'}
								banner
								showIcon={false}
							/>
						)}

						<Form layout={'vertical'} form={form} onFinish={onFinish}>
							<Form.Item
								name="email"
								label="Email"
								rules={[
									{
										required: true,
										message: 'Please enter your email',
										type: 'email',
									},
								]}>
								<Input placeholder="Enter your email" />
							</Form.Item>
							<Form.Item
								name="password"
								label="Password"
								rules={[
									{
										required: true,
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
