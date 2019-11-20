import React, {useState} from 'react';
import { Grid, TextField, Button, FormControlLabel, Checkbox, Link } from "@material-ui/core";
import Visitor from '../backendModels/Visitor';
import {login} from "../utils/auth"
import fetch from 'isomorphic-unfetch'


//  type Props = {goFetch: (visitor:Visitor) => Promise<users>}

export type LoginInputs = {
  username: string
  name: string
  password: string
  phonenumber: string
}

 const Register: React.FunctionComponent = () => {

  const initialValues: LoginInputs = { 
    username: "", 
    name: "",
    password: "", 
    phonenumber: ""
  };

  const [inputs, setInputs] = useState(initialValues);
  const [acceptedConditons, setAcceptedConditions] = useState({commercial: false, terms: false})

  

  const handleSubmit = async (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    const visitor: Visitor = new Visitor();
    visitor.username = inputs.username;
    visitor.name = inputs.name;
    visitor.phoneNumber = inputs.phonenumber;
    visitor.password = inputs.password;
    visitor.acceptedCommercial = acceptedConditons.commercial;
    visitor.acceptedTerms = acceptedConditons.terms;
    visitor.userType = false;
    console.log(visitor);
    // props.goFetch(visitor)
    

    const url = '/api/visitor'

    //  const response = await fetch(url)


    const response = await fetch(url,{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
          'Content-Type': 'application/json'
      }, 
      body: JSON.stringify({
         visitor
         })
      })

    if (response.status === 200) {
      // const { token } = await response.json()
       console.log('got here')
      // console.log(token);
      console.log(response);

      // await login({ token })  ok next step
    } else {
      console.log('Login failed.')
      console.log(response.statusText)
      // https://github.com/developit/unfetch#caveats
      //  let error = new Error(response.statusText)
      // // error.response = response
      //  throw error
      //  console.log(error)
    }
  }

  const handleChange = (e: React.ChangeEvent<any>) => {
    console.log(e.target.id)
     setAcceptedConditions({
        ...acceptedConditons,
        [e.target.id] : e.target.checked
     })

  }
   const handleInputChange = (e: React.ChangeEvent<any>) => {
    //  const target = e.target;
    //  const value = target.type === 'checkbox' ? target.checked : target.value;
    //  const name = target.name;

    //e.persist();
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
   }

return (

    <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
          
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="username"
                autoComplete="email"
                onChange={handleInputChange}
                // onChange={(e) => setUsername(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleInputChange}
                // onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="name"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="name"
                label="name"
                autoFocus
                onChange={handleInputChange}
                // onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="phoneNumber"
                label="Phone Number"
                name="phonenumber"
                autoComplete="pnumber"
                onChange={handleInputChange}
                // onChange={(e) =>setPhonenumber(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                // name="terms"
                label="Accept Terms and Conditons"
                control={<Checkbox value="acceptedTerms"  id="terms" color="primary" checked={acceptedConditons.terms} onChange={handleChange} />} 
                    // onChange={(e) => setAcceptedTerms(e.target.checked)
                    
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                // name= "commercial"
                label="I want to receive notifications"
                control={<Checkbox 
                  id="commercial"
                  value="acceptedCommercial" 
                  color="primary" 
                  checked={acceptedConditons.commercial} 
                  onChange={handleChange}
                  // onChange={(e) => setAcceptedCommercial(e.target.checked)
                  />} 
              />
            </Grid>
            <Grid container justify="center" >
               
                <Grid item xs={4} >
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                    >
                        Register
                    </Button>
                </Grid>
            </Grid>
          </Grid>
          {/* <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid> */}
        </form>
)
        }
        
export default Register;