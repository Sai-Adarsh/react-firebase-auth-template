import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState, useCallback, Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Rowing from '@material-ui/icons/Rowing';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import * as firebase from "firebase";
import firebaseConfig from './firebase.config';
import { useHistory } from 'react-router';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Dashboard = (props) => {
  const classes = useStyles();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  function onClick() {
    setTimeout(
        function() {
            try {
                firebase.auth().signOut();
                history.push('/');
            } 
            catch (e) {
                console.log(e);
            }
        }, 2000);
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <Rowing />
        </Avatar>
        <Typography component="h1" variant="h5">
          Logout
        </Typography>
        <Button
            fullWidth
            variant="contained"
            onClick={onClick}
            color="primary"
            className={classes.submit}
          >
            Logout
          </Button>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

export default Dashboard;