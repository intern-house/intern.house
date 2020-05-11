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
	Logo,
	RadioStyle,
	CheckboxStyle,
	Background,
	HeroImg,
} from './sign-up-styles';
import { Link } from 'react-router-dom';

import MainLogo from '../../../assets/img/logo.png';
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
					<Logo src={MainLogo} style={{ width: '35px' }} />

					<Form
						form={form}
						name="register"
						onFinish={onFinish}
						layout={'vertical'}>
						<Row style={{ marginLeft: '5%', width: '75%' }}>
							<Col xs={24} md={12} className={'p-xs-1 p-md-3'}>
								<Title>Sign Up</Title>

								<Form.Item
									name="Username"
									label="Username"
									rules={[
										{
											required: true,
											message: 'Please input your Username!',
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
											message: 'The input is not a valid E-mail!',
										},
										{
											required: true,
											message: 'Please input your E-mail!',
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
											message: 'Please input your password!',
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
											message: 'Please confirm your password!',
										},
										({ getFieldValue }) => ({
											validator(value) {
												if (!value || getFieldValue('password') === value) {
													return Promise.resolve();
												}
												return Promise.reject(
													'The two passwords that you entered do not match!'
												);
											},
										}),
									]}>
									<Input.Password placeholder="Confirm Password" />
								</Form.Item>
							</Col>

							<Col
								xs={24}
								md={12}
								style={{
									marginTop: '18%',
								}}>
								<Radio.Group
									onChange={handleChange}
									value={value}
									style={{ marginLeft: '20%' }}>
									<RadioStyle>
										<p
											style={{
												marginBottom: '-1%',
												fontSize: '12px',
											}}>
											I am...
										</p>

										<Radio value={1} style={{ marginTop: '4%' }}>
											Just Browsing
										</Radio>

										<Col>
											<Radio value={2} style={{ marginTop: '4%' }}>
												Waiting to Start Internship
											</Radio>
										</Col>
									</RadioStyle>
								</Radio.Group>

								<Checkbox.Group
									style={{
										width: '80%',
										marginTop: '5%',
										lineHeight: '30px',
										marginLeft: '20%',
									}}>
									<CheckboxStyle>
										<p
											style={{
												marginBottom: '-0.5%',
												fontSize: '12px',
											}}>
											I am...
										</p>

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
						<Row style={{ marginLeft: '5%' }}>
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
									<Checkbox style={{ marginLeft: '15px' }}>
										I Accept the <a href="">Terms of Use & Private Policies</a>
									</Checkbox>
								</Form.Item>

								<Space size={24} style={{ marginLeft: '15px' }}>
									<Form.Item>
										<SignUp>
											<Button
												type="primary"
												htmlType="submit"
												style={{ borderRadius: '5px', width: '130px' }}>
												Sign Up
											</Button>
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
