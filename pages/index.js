// @flow
import React, { Component } from 'react';
import page from '../hocs/page';
import Layout from '../components/Layout/Layout';
import Colors from '../components/Configuration/Colors/Scenic/Colors';

const Page = () =>
    <Layout type="scenic" order={2}>
        <Colors />
    </Layout>;

export default page(Page);
