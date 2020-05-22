import React, { useState } from 'react';
import Link from 'next/link';

import {
	Col,
	Row,
	Radio,
	Form,
	Space,
	Input,
	Checkbox,
	Typography,
} from 'antd';
import { Container, Background, HeroImg, StyledButton } from './styles';

const { Title } = Typography;

function SignUpContainer() {
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
			{/* This is for the hero image to not overflow creating a scrollable div */}
			<style global jsx>
				{`
					.IH_CONTENT {
						overflow-y: hidden !important;
					}
				`}
			</style>

			<Background></Background>
			<Container className={'p-5'}>
				<Form
					form={form}
					name="register"
					onFinish={onFinish}
					layout={'vertical'}>
					<Row>
						<Title>Sign up</Title>
					</Row>
					<Row justify={'space-between'}>
						<Col xs={24} md={10}>
							<Form.Item
								name="Username"
								label="Username"
								rules={[
									{
										required: true,
										message: 'Please enter a username',
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
										message: 'Please use a valid email',
									},
									{
										required: true,
										message: 'Please enter an email',
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
										message: 'Please enter your password',
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
							<div className={'mt-2'}>
								<p className={'mb-0'}>I am...</p>
								<Radio.Group onChange={handleChange} value={value}>
									<Radio value={1} span={24}>
										Just browsing
									</Radio>

									<Col>
										<Radio value={2} span={24}>
											Waiting to start my internship
										</Radio>
									</Col>
								</Radio.Group>
							</div>

							<div className={'mt-3'}>
								<p className={'mb-0'}>I am...</p>
								<Checkbox.Group>
									<Col span={24}>
										<Checkbox value="A">Looking for property</Checkbox>
									</Col>
									<Col span={24}>
										<Checkbox value="B">Looking for a job</Checkbox>
									</Col>
								</Checkbox.Group>
							</div>
						</Col>
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
												: Promise.reject(' Please accept the agreement'),
									},
								]}
								className={'mt-3'}>
								<Checkbox>
									I accept the{' '}
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
									<Link href="/login/signin" as="signin">
										<a>Back to Sign In </a>
									</Link>
								</Form.Item>
							</Space>
						</Col>
					</Row>
				</Form>

				<HeroImg src={'/svg/Login/Sign-Up/Hero.svg'}></HeroImg>
			</Container>
		</>
	);
}

export default SignUpContainer;
