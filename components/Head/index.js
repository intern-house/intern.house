import PropTypes from 'prop-types';
import HeadMetaTags from './head-meta-tags';
import HeadOGGTags from './head-seo-tags';

function HeadComponent({ title }) {
	return (
		<>
			<title>{title ? `${title} | Intern.House` : 'Intern.House'}</title>
			<HeadMetaTags />
			<HeadOGGTags />
			<link rel="icon" type="image/x-icon" href="/favicon.ico" />
		</>
	);
}

HeadComponent.propTypes = {
	title: PropTypes.string,
};

export default HeadComponent;
