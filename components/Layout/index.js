import PropTypes from 'prop-types';
import HeadComponent from '../Head';
import Navigation from '../Navigation';
import Footer from '../Footer';

const Layout = ({ title, children }) => {
	return (
		<div className={'IH_BODY'}>
			<HeadComponent title={title} />
			<Navigation />
			<div className={'IH_CONTENT'}>{children}</div>
			<Footer className={'IH_FOOTERT'} />
		</div>
	);
};

Layout.propTypes = {
	title: PropTypes.string,
	children: PropTypes.any,
};

export default Layout;
