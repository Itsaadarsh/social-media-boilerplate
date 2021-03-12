import React from 'react';
import { Form, Formik } from 'formik';
import { Wrapper } from '../components/Wrapper';
import { InputField } from '../components/InputField';
import { Box } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { useRegisterMutation } from '../generated/graphql';
import { errorMap } from '../utils/errosMap';
import { useRouter } from 'next/router';
import { withUrqlClient } from 'next-urql';
import { createUrqlClient } from '../utils/createUrqlClient';

interface registerProps {}

const Register: React.FC<registerProps> = ({}) => {
  const [, register] = useRegisterMutation();
  const router = useRouter();
  const registerForm = async (values, { setErrors }) => {
    const response = await register(values);
    if (response.data.register.errors) {
      setErrors(errorMap(response.data.register.errors));
    } else if (response.data.register.user) {
      router.push('/');
    }
  };
  return (
    <Wrapper varient='small'>
      Register
      <Formik initialValues={{ username: '', password: '' }} onSubmit={registerForm}>
        {({ isSubmitting }) => (
          <Form>
            <InputField name='username' placeholder='username' label='Username' />
            <Box mt={4}>
              <InputField name='password' placeholder='password' label='Password' type='password' />
            </Box>
            <Button mt={4} isLoading={isSubmitting} type='submit' color='unset' backgroundColor='teal'>
              Register
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default withUrqlClient(createUrqlClient)(Register);
