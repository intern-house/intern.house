import { Button } from 'antd';
import { Wrapper, MainDiv } from './styles';
import { Link } from 'next';

const ErrorComponent = ({ statusCode }) => {
	return (
		<Wrapper>
			<MainDiv>
				{statusCode == 403 && <img src={'/svg/Error/403.svg'} />}
				{statusCode == 404 && <img src={'/svg/Error/404.svg'} />}
				{statusCode == 500 && <img src={'/svg/Error/500.svg'} />}

				<p className={'mt-5'}>
					{statusCode
						? `An error ${statusCode} occurred on server`
						: 'An error occurred on client'}
				</p>

				<Link href="/" as="/">
					<Button>Go home</Button>
				</Link>
			</MainDiv>
		</Wrapper>
	);
};

export default ErrorComponent;
