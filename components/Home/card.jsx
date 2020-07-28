import React, { Component } from 'react';

import { Card, HeroImg } from './styles';
import { Row, Col, Typography, Form, Input, Button } from 'antd';

const { Title } = Typography;

function CardView(props) {
	return (
		<>
			<Card className={'p-4'}>
				<Row justify="center">
					<Col span={24}>
                        <HeroImg className={'m-5'} src={props.imgUrl}/>
						<Title className={'mt-5 mb-4'}level={4}>{props.title}</Title>
                        <Title level={4} style={{fontWeight: "lighter"}}>{props.description}</Title>
					</Col>
				</Row>
			</Card>
		</>
	);
}

export default CardView;
