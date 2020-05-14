import React, { useState } from 'react';

import {
	Col,
	Row,
	Radio,
	Card,
	Form,
	Space,
	Input,
	Checkbox,
	Button,
} from 'antd';

import {
	Container,
	Title,
	SignUp,
	SignIn,
	RadioStyle,
	CheckboxStyle,
	Background,
	HeroImg,
	RowStyle,
	RadioTitle,
	PolicyStyle,
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
			<Container>
				<Card>
					<Form
						form={form}
						name="register"
						onFinish={onFinish}
						layout={'vertical'}>
						<RowStyle>
							<Row>
								<Title>Sign Up</Title>
							</Row>
							<Row>
								<Col xs={24} md={12} className={'p-xs-1 p-md-3'}>
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
												validator({ value }) {
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

								<Col xs={24} md={12} className={'mt-5'}>
									<Radio.Group onChange={handleChange} value={value}>
										<RadioStyle>
											<RadioTitle>I am...</RadioTitle>

											<Radio value={1} className={'mt-2'}>
												Just Browsing
											</Radio>

											<Col>
												<Radio value={2} className={'mt-2'}>
													Waiting to Start Internship
												</Radio>
											</Col>
										</RadioStyle>
									</Radio.Group>

									<Checkbox.Group>
										<CheckboxStyle>
											<RadioTitle>I am...</RadioTitle>

											<Col>
												<Checkbox value="A">Looking for Listings</Checkbox>
											</Col>
											<Col span={20}>
												<Checkbox value="B">
													Putting Property for Listings
												</Checkbox>
											</Col>
										</CheckboxStyle>
									</Checkbox.Group>
								</Col>

								<HeroImg src={HeroImage}></HeroImg>
							</Row>
						</RowStyle>
						<Row className={'ml-5'}>
							<Col>
								<Form.Item
									name="agreement"
									valuePropName="checked"
									rules={[
										{
											validator: value =>
												value
													? Promise.resolve()
													: Promise.reject(' Please Accept Agreement'),
										},
									]}>
									<PolicyStyle>
										<Checkbox className={'ml-3'}>
											I Accept the <a href="">Terms of Use </a>&{' '}
											<a href="">Private Policies</a>
										</Checkbox>
									</PolicyStyle>
								</Form.Item>

								<Space size={24} className={'ml-3'}>
									<Form.Item>
										<SignUp>
											<StyledButton type="primary" htmlType="submit">
												Sign Up
											</StyledButton>
										</SignUp>
									</Form.Item>

									<Form.Item>
										<Link to="/signin">
											<SignIn>Back to Sign In</SignIn>
										</Link>
									</Form.Item>
								</Space>
							</Col>
						</Row>
					</Form>
				</Card>
			</Container>
		</>
	);
};

export default SignUpContainer;
