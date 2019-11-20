import React, {useState} from 'react';
import { Grid, TextField, FormControlLabel, Button, Link, Checkbox } from "@material-ui/core";


export type LoginInputs = {
  username: string
  password: string
}

const Login: React.FunctionComponent = () => {

  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  const initialValues: LoginInputs = { 
    username: "", 
    password: "", 
  };

  const [inputs, setInputs] = useState(initialValues);


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs.username, inputs.password);
  }

  const handleInputChange = (e: React.ChangeEvent<any>) => {

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
              />
            </Grid>

            <Grid container justify="center" >
                <Grid item xs={4}>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                    >
                        Log In
                    </Button>
                </Grid>

            <Grid item xs={4} >
                <Link href="/signup">
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                >
                    Register
                </Button>
                </Link>
                
            </Grid>
            </Grid>
          </Grid>
          {/* <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Don't have an account? Sign up
              </Link>
            </Grid>
          </Grid> */}
        </form>

)
        };

export default Login;