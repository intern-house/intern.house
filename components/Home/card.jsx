import React, { Component } from 'react';

import { Card, HeroImg, CardImgContainer, CardTxtContainer } from './styles';
import { Row, Col, Typography, Form, Input, Button } from 'antd';

const { Title } = Typography;

function CardView(props) {
	return (
		<>
			<Card className={'p-xs-2 p-sm-3 p-md-4'}>
				<CardImgContainer>
					<img src={props.imgUrl}></img>
				</CardImgContainer>
				<CardTxtContainer>
					<Title className={'mt-5 mb-4'} level={4}>
						{props.title}
					</Title>
					<Title level={4} className={'mb-4'} style={{ fontWeight: 'lighter' }}>
						{props.description}
					</Title>
				</CardTxtContainer>
			</Card>
		</>
	);
}

export default CardView;

