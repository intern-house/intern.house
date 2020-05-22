import React from 'react';
import PropTypes from 'prop-types';

// STYLESHEETS
import 'antd/dist/antd.css';
import '../styles/vars.css';
import '../styles/spacer.min.css';
import '../styles/index.css';

MyApp.propTypes = {
	Component: PropTypes.any,
	pageProps: PropTypes.any,
};

export default function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />;
}
