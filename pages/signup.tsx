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

    const response = await fetch(`${baseUrl}/visitormanagement/v1/visitor`,{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
      }, 
      body: JSON.stringify({
           firstName:this.state.firstName
         })
      })
    //   .then(response => response.json())
    //   .then(data => console.log(data))
    //   .catch(error => console.log(error))

    const users = await response.json()
  
    return { users }
  }
  
  export default SignUpPage;