import { Button } from '@chakra-ui/button';
import { Box } from '@chakra-ui/layout';
import { Form, Formik } from 'formik';
import { NextPage } from 'next';
import { withUrqlClient } from 'next-urql';
import { useRouter } from 'next/router';
import { InputField } from '../../components/InputField';
import { Wrapper } from '../../components/Wrapper';
import { useChangePasswordMutation } from '../../generated/graphql';
import { createUrqlClient } from '../../utils/createUrqlClient';
import { errorMap } from '../../utils/errosMap';

const forgotPassword: NextPage = () => {
  const [, changePassword] = useChangePasswordMutation();
  const router = useRouter();
  const changePasswordForm = async (values, { setErrors }) => {
    const response = await changePassword({
      password: values.confirmPassword,
      token: typeof router.query.token === 'string' ? router.query.token : '',
    });
    if (response.data.changePassword.errors) {
      console.log(response.data.changePassword.errors);

      setErrors(errorMap(response.data.changePassword.errors));
    } else if (response.data.changePassword.user) {
      router.push('/');
    }
  };
  return (
    <Wrapper varient='small'>
      Forgot Password
      <Formik initialValues={{ newPassword: '', confirmPassword: '' }} onSubmit={changePasswordForm}>
        {({ isSubmitting }) => (
          <Form>
            <InputField name='newPassword' placeholder='New Password' label='New Password' type='password' />
            <Box mt={4}>
              <InputField
                name='confirmPassword'
                placeholder='Confirm Password'
                label='Confirm Password'
                type='password'
              />
            </Box>
            <Button mt={4} isLoading={isSubmitting} type='submit' color='unset' backgroundColor='teal'>
              Change Password
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(forgotPassword);
