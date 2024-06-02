"use client";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useStore } from "./stores/app-store";

export default function Home() {
  const { count, removeAll, increasePopulation } = useStore();

  //DOCS: dibawah ini untuk pemanggilan state zustand yang lebih spesific dan untuk di custom , function selector
  //ada konsep shallow dalam zustand untuk compare data yg lebih kompleks
  // const count = useStore((state) => state.count);
  // const removeAll = useStore((state) => state.removeAll);
  // const increasePopulation = useStore((state) => state.increasePopulation);
  // https://github.com/pmndrs/zustand

  return (
    <>
      <Box>
        <Text>Home Page</Text>

        <Flex alignItems={"center"}>
          <Button onClick={removeAll}>Remove All</Button>
          <Text>Count: {count}</Text>
          <Button onClick={increasePopulation}>Increase</Button>
        </Flex>
      </Box>
    </>
  );
}
