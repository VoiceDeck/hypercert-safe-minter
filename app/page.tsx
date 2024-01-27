"use client";
import { Link } from "@chakra-ui/next-js";
import Image from "next/image";
import { Box, Flex, Heading, Spacer, Text } from "@chakra-ui/react";
import { ConnectKitButton } from "connectkit";
import { useAccount } from "wagmi";
import { useAutoConnect } from "@/hooks/useAutoConnect";

export default function Home() {
  const { address } = useAccount();

  useAutoConnect();

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
          <Text>Very Proof of Concept</Text>
        </Box>
        <Spacer />
        <ConnectKitButton />
      </Flex>

      <Flex
        direction={"column"}
        w={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Image
          src="/hypercerts_logo_yellow.png"
          alt="Hypercerts Logo"
          width={180}
          height={37}
          priority
        />
        <Link href="/mint" target="_blank" rel="noopener noreferrer">
          <Heading>Mint</Heading>
          <Text>Start minting hypercerts</Text>
        </Link>
      </Flex>
    </Flex>
  );
}
