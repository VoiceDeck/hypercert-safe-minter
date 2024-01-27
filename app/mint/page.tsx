"use client";
import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import { HypercertMinter } from "@/components/HypercertMinter";
import { ConnectKitButton } from "connectkit";
import { useAccount } from "wagmi";

export default function Home() {
  const { address } = useAccount();

  if (!address) {
    return (
      <Flex
        direction={"column"}
        justifyContent={"space-between"}
        p={"2rem"}
        color={"white"}
      >
        <Flex w={"100%"} justifyContent={"space-around"}>
          <Box
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            p={4}
            bgColor={"rgba(49, 74, 62, 0.5)"}
          >
            <Text>
              No account connected. Please connect via app.safe.global.
            </Text>
          </Box>
          <Spacer />
          <ConnectKitButton />
        </Flex>
      </Flex>
    );
  }

  return (
    <Flex
      direction={"column"}
      justifyContent={"space-between"}
      p={"2rem"}
      color={"white"}
    >
      <Flex w={"100%"} justifyContent={"space-around"}>
        <Box
          maxW="sm"
          borderWidth="1px"
          borderRadius="lg"
          p={4}
          bgColor={"rgba(49, 74, 62, 0.5)"}
        >
          <Text>
            Get started by editing&nbsp;
            <Text as="kbd" fontWeight={"bold"}>
              app/page.tsx
            </Text>
          </Text>
        </Box>
        <Spacer />
        <ConnectKitButton />
      </Flex>

      <Flex
        direction={"column"}
        w={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
        p={"5rem"}
      >
        <HypercertMinter />
      </Flex>
    </Flex>
  );
}
