// this is demo
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
import Select from './Components/FormsUI/Select';
import DateTimePicker from './Components/FormsUI/DataTimePicker';
import Checkbox from './Components/FormsUI/Checkbox';
import Button from './Components/FormsUI/Button';
import countries from './data/countries.json';
import moment from 'moment';
// Style Component
const useStyles = makeStyles((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(8),
  },
}));
// Initial State Of Field
const INITIAL_FORM_STATE = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  addressLine1: '',
  addressLine2: '',
  city: '',
  state: '',
  country: '',
  dateOfBirth: '',
  message: '',
  gender:'',
  termsOfService: false
};

// Validation With Yup 

const FORM_VALIDATION = Yup.object().shape({
  firstName: Yup.string()
    .required('Required'),
  lastName: Yup.string()
    .required('Required'),
  email: Yup.string()
    .email('Invalid email.')
    .required('Required'),
  phone: Yup.string()
    .matches(/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/, 'Phone number is not valid')
    .required('Required'),
  addressLine1: Yup.string()
    .required('Required'),
  addressLine2: Yup.string(),
  city: Yup.string()
    .required('Required'),
  state: Yup.string()
    .required('Required'),
  country: Yup.string()
    .required('Required'),
  gender: Yup.string()
    .required('Required'),
  dateOfBirth: Yup.string().test(
    "DOB",
    "Shoud Be Greater Then 18",
    value => {
      return moment().diff(moment(value), 'years') >= 18;
    }
  ).required('Required'),
  message: Yup.string(),
  termsOfService: Yup.boolean()
    .oneOf([true], 'The terms and conditions must be accepted.')
    .required('The terms and conditions must be accepted.'),
});

  const Gender = {
  "male": "Male",
  "female": "Female",
  "other": "Other",
  }

const App = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12}>
        <Header title="Form" />
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
                    <Typography>
                      Your details
                    </Typography>
                  </Grid>

                  <Grid item xs={6}>
                    <Textfield
                      name="firstName"
                      label="First Name"
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <Textfield
                      name="lastName"
                      label="Last Name"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Textfield
                      name="email"
                      label="Email"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Textfield
                      name="phone"
                      label="Phone"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Typography>
                      Address
                    </Typography>
                  </Grid>

                  <Grid item xs={12}>
                    <Textfield
                      name="addressLine1"
                      label="Address Line 1"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Textfield
                      name="addressLine2"
                      label="Address Line 2"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Select
                      name="country"
                      label="Country"
                      options={countries}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Textfield
                      name="state"
                      label="State"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Textfield
                      name="city"
                      label="City"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <DateTimePicker
                      name="dateOfBirth"
                      label="Date Of Birth"
                    />
                  </Grid>
                  <Grid item xs={6}>
                      <Select
                        name="gender"
                        label="Gender"
                        options={Gender}
                      />
                  </Grid>
                  <Grid item xs={12}>
                    <Textfield
                      name="message"
                      label="Message"
                      multiline={true}
                      rows={4}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Checkbox
                      name="termsOfService"
                      legend="Terms Of Service"
                      label="I agree"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button>
                      Submit Form
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

export default App;
