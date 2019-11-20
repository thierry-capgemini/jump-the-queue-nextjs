import React from "react";
import Layout from "../components/Layout";
import Register from '../components/Register';
import fetch from "isomorphic-unfetch";

import {environment} from '../environments/environment'
import Visitor from "../backendModels/Visitor";
import {login} from "../utils/auth"


const SignUpPage = () => (
    <div>
        <Layout>
            {/* <Register goFetch={SignUpPage.getInitialProps}/> */}
            <Register />
        </Layout>
    </div>
  );


  // SignUpPage.getInitialProps = async (visitor: Visitor) => {

    // const baseUrl = environment.baseUrlRestServices;
{//trial

  // const url = '/api/visitor'

  // const response = await fetch(url,{
  //     method: 'POST',
  //     headers: {
  //         'Accept': 'application/json',
  //         'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify({
  //        visitor
  //      })
  //   })

  //   if (response.status === 200) {
  //     const { token } = await response.json()
  //     await login({ token })
  //   } else {
  //     console.log('Login failed.')
  //     // https://github.com/developit/unfetch#caveats
  //     // let error = new Error(response.statusText)
  //     // error.response = response
  //     // throw error
  //   }
  // } catch (error) {
  //   console.error(
  //     'You have an error in your code or there are Network issues.',
  //     error
  //   )

    // const { response } = error
    // setUserData(
    //   Object.assign({}, userData, {
    //     error: response ? response.statusText : error.message,
    //   })
    // )
// }
    }


    //   .then(response => response.json())
    //   .then(data => console.log(data))
    //   .catch(error => console.log(error))

    // const users = await response.json()

    // return { users }


  export default SignUpPage;