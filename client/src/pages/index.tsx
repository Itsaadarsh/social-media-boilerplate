import { Button } from "@chakra-ui/button";
import { Box, Heading, Stack, Text } from "@chakra-ui/layout";
import { withUrqlClient } from "next-urql";
import { Navbar } from "../components/Navbar";
import { usePostsQuery } from "../generated/graphql";
import { createUrqlClient } from "../utils/createUrqlClient";

const Index = () => {
  const [{ data, fetching }] = usePostsQuery({ variables: { limit: 10 } });

  if (!data && !fetching) {
    return <div>No post found</div>;
  }
  return (
    <>
      <Navbar />
      <Heading color="whatsapp.400" textAlign="center" m={6} fontSize="4xl">
        Car Media
      </Heading>
      {!data ? null : (
        <Stack spacing={8} w={"50%"} m="auto">
          {data.posts.map(post => (
            <Box key={post.id} p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">{post.title}</Heading>
              <Text mt={4}>{post.textSnippet}</Text>
            </Box>
          ))}
          <Button mt={4} color="whatsapp.400" fontSize={"3xl"} backgroundColor="tomato" m={6}>
            LOAD MORE
          </Button>
        </Stack>
      )}
    </>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Index);
