import React, { useState } from 'react';
import Link from 'next/link';

import { Row, Col, Typography, Form, Input, Button } from 'antd';
import { Container, Background, Image } from './styles';

const { Title } = Typography;

function ForgetPasswordContainer() {
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
				<Row justify={'center'}>
					<Col md={24} lg={12} className={'p-xs-1 p-md-3'}>
						<Title className={'mb-5'}>Forgot Password</Title>
						<Form layout={'vertical'} form={form} onFinish={onFinish}>
							<p>
								Thats fine! We will send you an email to reset your password.
							</p>
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

							<Form.Item>
								<Button type="primary" htmlType="submit" className={'mt-3'}>
									Reset my password
								</Button>
							</Form.Item>

							<Form.Item>
								<Link href="/login/signin" as="/signin">
									<a>Go back to sign-in page</a>
								</Link>
							</Form.Item>
						</Form>
					</Col>
					<Col xs={0} md={0} lg={12}>
						<Image src={'/svg/Login/Forget-Password/Hero.svg'} />
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default ForgetPasswordContainer;
