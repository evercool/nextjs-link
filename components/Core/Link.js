// @flow
import React from 'react';
import NextLink from 'next/link';
import PropTypes from 'prop-types';
import type { TextProps } from './Text';
import Text, { clearTextStyle } from './Text';
import type { Theme } from '../../themes/theme';

export type LinkProps = TextProps & {
    to: string,
    activeStyle?: (theme: Theme, style: Object) => Object,
};

type LinkContext = {
    theme: Theme,
    pathname: string,
};

const isExternalLink = to => to.includes('://');

const Link = (
    { style, activeStyle, ...props }: LinkProps,
    { theme, pathname }: LinkContext,
) => {
    const passedStyle = style ? style(theme, {}) : {};

    if (isExternalLink(props.to)) {
        return (
            <Text as="a" rel="noopener noreferrer" target="_blank" {...props} />
        );
    } else {
        const passedStyle = style ? style(theme, {}) : {};
        const passedActiveStyle = activeStyle ? activeStyle(theme, {}) : {};
        return (
            <NextLink href={props.to}>
                <Text
                    as="a"
                    style={theme => ({
                        ...passedStyle,
                        ...(props.to === pathname ? passedActiveStyle : {}),
                    })}
                >
                    {props.children}
                </Text>
            </NextLink>
        );
    }
};

Link.contextTypes = {
    theme: PropTypes.object,
    pathname: PropTypes.string,
};

export default Link;
