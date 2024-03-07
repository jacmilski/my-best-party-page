// @ts-nocheck
import React from 'react';
import GlobalLayout from './src/components/templates/GlobalLayout/GlobalLayout';

export const wrapPageElement = ({ element, props }) => {
    return <GlobalLayout {...props}>{ element }</GlobalLayout>
}

export const onRenderBody = ({ setHeadComponents }) => {
    setHeadComponents([
        <link
            rel='preload'
            href='/fonts/Roboto-Light.woff2'
            as='font'
            type='font/woff2'
            crossOrigin='anonymus'
            key='interFont'
        />,
        <link
            rel='preload'
            href='/fonts/Roboto-Regular.woff2'
            as='font'
            type='font/woff2'
            crossOrigin='anonymus'
            key='interFont'
        />,
        <link
            rel='preload'
            href='/fonts/Roboto-Bold.woff2'
            as='font'
            type='font/woff2'
            crossOrigin='anonymus'
            key='interFont'
        />
    ])
}