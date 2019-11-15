import React from "react";
import Link from "next/link";
import {AppBar, Toolbar, IconButton, Typography, Button, makeStyles} from "@material-ui/core"
import MenuIcon from '@material-ui/icons/Menu';


// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
// }));


const Header: React.FunctionComponent = () => {
  
  
  return (

  <>
  <AppBar position="static">
    <Toolbar>
      <IconButton edge="start"  color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" >
        Jump the Queue
      </Typography>
      <Link href="/signup">
        <Button color="inherit">Sign Up</Button>
      </Link>
      <Link href="/login">
        <Button color="inherit">Login</Button>
      </Link>
    </Toolbar>
  </AppBar>

  </>
  )
}

export default Header;

 {/* <><h1>JUMP THE QUEUE</h1>
  <Link href="/signup">
    <a>Sign Up Page</a>
  </Link>
  <Link href="/login">
    <a>Login Page</a>
  </Link> 
  </>*/}