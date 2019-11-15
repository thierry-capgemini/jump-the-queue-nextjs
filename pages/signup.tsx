import React from "react";
import Layout from "../components/Layout";
import Register from '../components/Register';
import fetch from "isomorphic-unfetch";

import {environment} from '../environments/environment'


const SignUpPage: React.FunctionComponent = () => (
    <div>
        <Layout>
            <Register/>
        </Layout>
    </div>
  );


  SignUpPage.getInitialProps = async () => {

    const baseUrl = environment.baseUrlRestServices;

    const response = await fetch('http://localhost:3000/api/users');
    const response = await fetch(baseUrl)

    const users = await response.json()
  
    return { users }
  }
  
  export default SignUpPage;