// @flow
import { Component } from 'react';
import PropTypes from 'prop-types';

export default (ComposedComponent: any) =>
    class WithContext extends Component {
        static childContextTypes = {
            pathname: PropTypes.string,
        };

        getChildContext() {
            return { pathname: this.props.url.pathname };
        }

        render() {
            return <ComposedComponent {...this.props} />;
        }
    };
