import React, { Component } from 'react';
import Router from 'next/router';
import Link from 'next/link';

import { Background, Container, HeroImg } from './styles';
import { Row, Col, Typography, Form, Input, Button } from 'antd';

const { Title } = Typography;
const { Search } = Input;

function HomeContainer() {
	const [form] = Form.useForm();

	const onFinish = values => {
		console.log('Success:', values);

		// TODO: Add API endpoint.
	};

	return (
		<>
			<Container className={'p-4'}>
				<Row>
					<Col md={24} lg={12} className={'p-xs-1 p-md-3'}>
						<Title
							style={{ fontWeight: 'bold', fontSize: '50px' }}
							className={'mb-5 mt-5'}>
							Connect within your industry the right way with no hassle.{' '}
						</Title>
						<Title className={'mb-4'} level={4}>
							Collated housing listings and industry knowledge all in one.
						</Title>
						<Search
							placeholder="Enter a location or address."
							enterButton="Search"
							size="large"
							onSearch={value => console.log(value)}
						/>
						<Title level={4} className={'mt-5'}>
							Just browsing? Select your <a href="#">industry</a>.
						</Title>
					</Col>

					<Col xs={0} lg={12}>
						<HeroImg src={'/svg/Login/Sign-In/Hero.svg'} />
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default HomeContainer;
