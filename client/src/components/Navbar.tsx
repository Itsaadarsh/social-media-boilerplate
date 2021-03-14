import { Box, Flex, Link } from '@chakra-ui/layout';
import React from 'react';
import NextLink from 'next/link';
import { useLogoutMutation, useMeQuery } from '../generated/graphql';
import { Button } from '@chakra-ui/button';
import { useRouter } from 'next/router';
import { isServer } from '../utils/isServer';

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  const [{ data, fetching }] = useMeQuery({ pause: isServer() });
  const [{ fetching: logoutFetching }, logout] = useLogoutMutation();
  const logoutBtn = async () => {
    await logout();
  };

  let response = null;
  if (fetching) {
  } else if (!data?.me) {
    response = (
      <>
        <NextLink href='/login'>
          <Link color='white' mr={2}>
            LOGIN
          </Link>
        </NextLink>
        <NextLink href='/register'>
          <Link color='white'>REGISTER</Link>
        </NextLink>
      </>
    );
  } else {
    response = (
      <Flex>
        <Box mr={4}>{data?.me.username}</Box>
        <Button variant='link' onClick={logoutBtn} isLoading={logoutFetching}>
          LOGOUT
        </Button>
      </Flex>
    );
  }
  return (
    <Flex bg='tomato' p={4} ml={'auto'}>
      <Box ml={'auto'}>{response}</Box>
    </Flex>
  );
};
