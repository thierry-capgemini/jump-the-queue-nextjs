import React from "react";
import Layout from "../components/Layout";
import { Card, CardActionArea, CardMedia } from "@material-ui/core";
import Login from "../components/Login";

const LoginPage: React.FunctionComponent = () => (
    <div>
        <Layout>
            <Card >
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Jump The Queue"
                        height="180"
                        // image="../public/images/jumptheq.png"
                        image="https://raw.githubusercontent.com/wiki/devonfw/devonfw-tutorial-sources/images/devon4ng/3.BuildYourOwn/jumptheq.png"
                        title="jump the queue"
                    />
                </CardActionArea>
            </Card>
            <Login />
        </Layout>
    </div>
  );
  
  export default LoginPage;