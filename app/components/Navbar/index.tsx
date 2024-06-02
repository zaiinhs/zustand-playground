"use client";
import { Link } from "@chakra-ui/next-js";
import { Flex } from "@chakra-ui/react";

export const Navbar = () => {
  return (
    <>
      <Flex bg={"white"} p={"1em"} justifyContent={"center"} gap={"2em"}>
        <Link href="/" color="blue.400" _hover={{ color: "blue.500" }}>
          Home
        </Link>
        <Link href="/explore" color="blue.400" _hover={{ color: "blue.500" }}>
          Explore
        </Link>
        <Link href="/about" color="blue.400" _hover={{ color: "blue.500" }}>
          About
        </Link>
      </Flex>
    </>
  );
};
