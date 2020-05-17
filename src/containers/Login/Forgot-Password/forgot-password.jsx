import React from 'react';
import { Row, Col, Typography, Form, Input, Button } from 'antd';
import { Container, Background, Image } from './styles';
import { Link } from 'react-router-dom';
import passwordGraphic from '../../../assets/svg/Login/Forgot-Password/forgotPasswordGraphic.svg';

const { Title } = Typography;

const ForgetPasswordContainer = () => {
	const layout = {
		wrapperCol: {
			span: 16,
		},
	};

	return (
		<>
			<Background></Background>
			<Container className={'p-5'}>
				<Row justify={'center'}>
					<Col md={24} lg={12} className={'p-xs-1 p-md-3'}>
						<Title className={'mb-5'}>Forgot Password</Title>
						<Form
							name="basic"
							initialValues={{
								remember: true,
							}}>
							<p>
								Thats fine! We will send you an email to reset your password.
							</p>
							<p>Email</p>
							<Form.Item
								layout={'vertical'}
								{...layout}
								name="email"
								rules={[
									{
										type: 'email',
										message: 'The input is not a valid E-mail',
									},
									{
										required: true,
										message: 'Please enter an email address',
									},
								]}>
								<Input placeholder="Enter your email" />
							</Form.Item>

							<Form.Item>
								<Button type="primary" htmlType="submit">
									Reset my password
								</Button>
							</Form.Item>

							<Form.Item>
								<Link to="/signin">Go back to sign-in page</Link>
							</Form.Item>
						</Form>
					</Col>
					<Col xs={0} md={0} lg={12}>
						<Image src={passwordGraphic} />
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default ForgetPasswordContainer;
