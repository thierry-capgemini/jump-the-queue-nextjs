import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import CssBaseline from '@material-ui/core/CssBaseline';




const Layout: React.FunctionComponent = (props: any) => (

    <div>
        <Head>
            <title>Jump the Queue</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"/>
        </Head>
        <CssBaseline />
        <Header />
        {props.children}
        <footer>
            <h3>CopyRight 2019</h3>
        </footer>
    </div>
)

export default Layout;