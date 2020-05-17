import React, { useState } from 'react';

import { Col, Row, Radio, Form, Space, Input, Checkbox } from 'antd';

import {
	Container,
	Title,
	Background,
	HeroImg,
	StyledButton,
} from './sign-up-styles';

import { Link } from 'react-router-dom';

import HeroImage from '../../../assets/svg/Login/Sign-Up/start_up.svg';

const SignUpContainer = () => {
	const [form] = Form.useForm();

	const onFinish = values => {
		console.log('Received values of form: ', values);
	};

	const [value, setValue] = useState(1);

	const handleChange = event => {
		setValue(event.target.value);
	};

	return (
		<>
			<Background></Background>
			<Container className={'p-5'}>
				<Form
					form={form}
					name="register"
					onFinish={onFinish}
					layout={'vertical'}>
					<Row>
						<Title className={'m-0 my-2'}>Sign Up</Title>
					</Row>
					<Row justify={'space-between'}>
						<Col xs={24} md={10}>
							<Form.Item
								name="Username"
								label="Username"
								rules={[
									{
										required: true,
										message: 'Please input your Username',
									},
								]}>
								<Input placeholder="Enter Username" />
							</Form.Item>

							<Form.Item
								name="Email"
								label="Email"
								rules={[
									{
										type: 'email',
										message: 'The input is not a valid E-mail',
									},
									{
										required: true,
										message: 'Please input your E-mail',
									},
								]}>
								<Input placeholder="Enter Email" />
							</Form.Item>

							<Form.Item
								name="password"
								label="Password"
								rules={[
									{
										required: true,
										message: 'Please input your password',
									},
								]}
								hasFeedback>
								<Input.Password placeholder="Enter Password" />
							</Form.Item>

							<Form.Item
								name="confirm"
								label="Confirm Password"
								dependencies={['password']}
								hasFeedback
								rules={[
									{
										required: true,
										message: 'Please confirm your password',
									},
									({ getFieldValue }) => ({
										validator(rule, value) {
											if (!value || getFieldValue('password') === value) {
												return Promise.resolve();
											}
											return Promise.reject(
												'The two passwords that you entered do not match'
											);
										},
									}),
								]}>
								<Input.Password placeholder="Confirm Password" />
							</Form.Item>
						</Col>

						<Col xs={24} md={12}>
							<div>
								<p className={'mb-0'}>I am...</p>
								<Radio.Group onChange={handleChange} value={value}>
									<Radio value={1} span={24}>
										Just Browsing
									</Radio>

									<Col>
										<Radio value={2} span={24}>
											Waiting to Start Internship
										</Radio>
									</Col>
								</Radio.Group>
							</div>

							<div className={'mt-3'}>
								<p className={'mb-0'}>I am...</p>
								<Checkbox.Group>
									<Col span={24}>
										<Checkbox value="A">Looking for Listings</Checkbox>
									</Col>
									<Col span={24}>
										<Checkbox value="B">Putting Property for Listings</Checkbox>
									</Col>
								</Checkbox.Group>
							</div>
						</Col>

						<HeroImg src={HeroImage}></HeroImg>
					</Row>
					<Row className={'mt-md-0 mt-sm-4'}>
						<Col md={10} xs={24}>
							<Form.Item
								name="agreement"
								valuePropName="checked"
								rules={[
									{
										validator: (_, value) =>
											value
												? Promise.resolve()
												: Promise.reject(' Please accept agreement'),
									},
								]}
								className={'mb-0 mt-3'}>
								<Checkbox>
									I Accept the{' '}
									<a href="https://intern.house/terms">Terms of Use </a>&{' '}
									<a href="https://intern.house/privacy">Private Policies</a>
								</Checkbox>
							</Form.Item>

							<Space size={24} className={'mt-3'}>
								<Form.Item>
									<StyledButton type="primary" htmlType="submit">
										Sign Up
									</StyledButton>
								</Form.Item>

								<Form.Item>
									<Link to="/signin">Back to Sign In </Link>
								</Form.Item>
							</Space>
						</Col>
					</Row>
				</Form>
			</Container>
		</>
	);
};

export default SignUpContainer;
