import { Button } from "@chakra-ui/button";
import { Box, Flex } from "@chakra-ui/layout";
import { Form, Formik } from "formik";
import { withUrqlClient } from "next-urql";
import React, { useState } from "react";
import { InputField } from "../components/InputField";
import { Wrapper } from "../components/Wrapper";
import { createUrqlClient } from "../utils/createUrqlClient";
import { useCreatePostMutation } from "../generated/graphql";
import { useRouter } from "next/router";
import Link from "next/link";
import { Navbar } from "../components/Navbar";

interface createpostProps {}

const createpost: React.FC<createpostProps> = ({}) => {
  const [customError, setCustomError] = useState("");
  const router = useRouter();
  const [_, createPost] = useCreatePostMutation();
  const createPostForm = async (values, { setErrors }) => {
    const response = await createPost(values);
    if (response.data === null && response.error.message) {
      setCustomError(response.error.message.replace("[GraphQL]", ""));
    } else if (response.data.createPost.creatorID) {
      router.push("/");
    }
  };

  return (
    <>
      <Navbar />
      <Wrapper varient="small">
        CREATE POST
        <Formik initialValues={{ title: "", text: "" }} onSubmit={createPostForm}>
          {({ isSubmitting }) => (
            <Form>
              <InputField name="title" placeholder="Title" label="Title" />
              <Box mt={4}>
                <InputField name="text" placeholder="Description" label="Description" />
              </Box>
              <Button mt={4} isLoading={isSubmitting} type="submit" color="unset" backgroundColor="teal">
                POST
              </Button>
              {customError ? (
                <Flex>
                  <Box mr="auto" color="red" mt="auto">
                    {customError}
                  </Box>
                  <Box backgroundColor="tomato" p={2} borderRadius={6}>
                    <Link href="/login">LOGIN</Link>
                  </Box>
                </Flex>
              ) : null}
            </Form>
          )}
        </Formik>
      </Wrapper>
    </>
  );
};

export default withUrqlClient(createUrqlClient)(createpost);
