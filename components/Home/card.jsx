import React, { Component } from 'react';

import { Card, HeroImg, InsideCardContainer } from './styles';
import { Row, Col, Typography, Form, Input, Button } from 'antd';

const { Title } = Typography;

function CardView(props) {
	return (
		<>
			<Card className={'p-xs-1 p-sm-3 p-md-4'}>
				<Row justify="center">
						<HeroImg className={'m-5'} src={props.imgUrl} />
						<Title className={'mt-5 mb-4'} level={4}>
							{props.title}
						</Title>
						<Title
							level={4}
							className={'mb-4'}
							style={{ fontWeight: 'lighter' }}>
							{props.description}
						</Title>
				</Row>
			</Card>
		</>
	);
}

export default CardView;
