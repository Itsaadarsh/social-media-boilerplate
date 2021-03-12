import React from 'react';
import { Form, Formik } from 'formik';
import { Wrapper } from '../components/Wrapper';
import { InputField } from '../components/InputField';
import { Box } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { useLoginMutation } from '../generated/graphql';
import { errorMap } from '../utils/errosMap';
import { useRouter } from 'next/router';
import { withUrqlClient } from 'next-urql';
import { createUrqlClient } from '../utils/createUrqlClient';

interface loginProps {}

const Login: React.FC<loginProps> = ({}) => {
  const [, login] = useLoginMutation();
  const router = useRouter();
  const loginForm = async (values, { setErrors }) => {
    const response = await login(values);
    if (response.data.login.errors) {
      setErrors(errorMap(response.data.login.errors));
    } else if (response.data.login.user) {
      router.push('/');
    }
  };
  return (
    <Wrapper varient='small'>
      Login
      <Formik initialValues={{ username: '', password: '' }} onSubmit={loginForm}>
        {({ isSubmitting }) => (
          <Form>
            <InputField name='username' placeholder='username' label='Username' />
            <Box mt={4}>
              <InputField name='password' placeholder='password' label='Password' type='password' />
            </Box>
            <Button mt={4} isLoading={isSubmitting} type='submit' color='unset' backgroundColor='teal'>
              Login
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default withUrqlClient(createUrqlClient)(Login);
