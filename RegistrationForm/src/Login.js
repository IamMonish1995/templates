import React from 'react';
import Header from './Components/Header';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Grid,
  Typography
} from '@material-ui/core';
import Textfield from './Components/FormsUI/Textfield';
import Button from './Components/FormsUI/Button';

// Style Component
const useStyles = makeStyles((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(25),
    marginBottom: theme.spacing(8),
  },
}));

// Initial State Of Field
const INITIAL_FORM_STATE = {
  email: '',
  password: '',
};

// Validation With Yup 

const FORM_VALIDATION = Yup.object().shape({

  email: Yup.string()
    .email('Invalid email.')
    .required('Required'),

  password: Yup.string()
    .required('Required')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
});

const Login = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12}>
        <Header title="Login Form" />
      </Grid>
      <Grid item xs={12}>
        <Container maxWidth="md">
          <div className={classes.formWrapper}>

            <Formik
              initialValues={{
                ...INITIAL_FORM_STATE
              }}
              validationSchema={FORM_VALIDATION}
              onSubmit={values => {
                console.log(values);
              }}
            >
              <Form>

                <Grid container spacing={2}>

                  <Grid item xs={12}>
                    <Typography align='center'>
                      Login...
                    </Typography>
                  </Grid>

                  <Grid item xs={12}>
                    <Textfield
                      name="email"
                      label="Email"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Textfield
                      name="password"
                      label="Password"
                      type="password"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Button>
                      Login
                    </Button>
                  </Grid>

                </Grid>
              </Form>
            </Formik>
          </div>
        </Container>
      </Grid>
    </Grid>
  );
};

export default Login;
