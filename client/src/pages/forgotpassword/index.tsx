import React from 'react';
import { Form, Formik } from 'formik';
import { Button } from '@chakra-ui/button';
import { withUrqlClient } from 'next-urql';
import { Wrapper } from '../../components/Wrapper';
import { InputField } from '../../components/InputField';
import { createUrqlClient } from '../../utils/createUrqlClient';
import { useForgotPasswordMutation } from '../../generated/graphql';
import { useRouter } from 'next/router';

interface forgotPasswordProps {}

const forgotPassword: React.FC<forgotPasswordProps> = ({}) => {
  const [, forgotpassword] = useForgotPasswordMutation();
  const router = useRouter();
  const forgotPasswordForm = async (values, { setErrors }) => {
    const response = await forgotpassword(values);
    if (response.data.forgotpassword) {
      router.push('/');
    } else if (!response.data.forgotpassword) {
      setErrors({ email: 'email does not exists' });
    }
  };
  return (
    <Wrapper varient='small'>
      Forgot Pasword
      <Formik initialValues={{ email: '' }} onSubmit={forgotPasswordForm}>
        {({ isSubmitting }) => (
          <Form>
            <InputField name='email' placeholder='email' label='Email' />
            <Button mt={4} isLoading={isSubmitting} type='submit' color='unset' backgroundColor='teal'>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default withUrqlClient(createUrqlClient)(forgotPassword);
